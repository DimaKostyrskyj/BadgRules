const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

async function ensureStorage() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(USERS_FILE);
  } catch {
    await fs.writeFile(USERS_FILE, JSON.stringify({ users: [] }, null, 2), 'utf8');
  }
}

async function readUsers() {
  const raw = await fs.readFile(USERS_FILE, 'utf8');
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed.users) ? parsed.users : [];
}

async function writeUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify({ users }, null, 2), 'utf8');
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

// Важно: это не полноценная система безопасности, просто пример хранения.
// Пароли в реальном проекте нужно хэшировать (bcrypt/argon2).
function hashPasswordInsecure(password) {
  return crypto.createHash('sha256').update(String(password || '')).digest('hex');
}

/**
 * POST /api/register
 * body: { email, password, name? }
 * создаёт пользователя и сохраняет registeredAt
 */
app.post('/api/register', async (req, res) => {
  const email = normalizeEmail(req.body?.email);
  const password = String(req.body?.password || '');
  const name = String(req.body?.name || '').trim();

  if (!email || !password) {
    return res.status(400).json({ error: 'Требуются поля email и password' });
  }

  const users = await readUsers();
  const exists = users.some(u => u.email === email);
  if (exists) {
    return res.status(409).json({ error: 'Аккаунт с таким email уже существует' });
  }

  const now = new Date();

  const user = {
    id: crypto.randomUUID(),
    email,
    name: name || null,
    passwordHash: hashPasswordInsecure(password),
    registeredAt: now.toISOString(), // <-- дата регистрации сохраняется тут
    lastLoginAt: null
  };

  users.push(user);
  await writeUsers(users);

  // не возвращаем passwordHash
  return res.status(201).json({
    id: user.id,
    email: user.email,
    name: user.name,
    registeredAt: user.registeredAt
  });
});

/**
 * GET /api/users/:id
 * возвращает профиль, включая дату регистрации
 */
app.get('/api/users/:id', async (req, res) => {
  const users = await readUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Пользователь не найден' });

  return res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    registeredAt: user.registeredAt,
    lastLoginAt: user.lastLoginAt
  });
});

(async () => {
  await ensureStorage();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
})();
