const express = require('express');
const router = express.Router();
const db = require('../db');

// GET جميع الـ leads
router.get('/', async (req, res) => {
  const result = await db.executeQuery('SELECT * FROM leads');
  const leads = result.rows.map(row => ({
    ID: row[0],
    NAME: row[1],
    EMAIL: row[2],
    SOURCE: row[3],
    STATUS: row[4]
  }));
  res.json(leads);
});

// POST إضافة Lead جديد
router.post('/', async (req, res) => {
  const { name, email, source, status } = req.body;
  await db.executeQuery(
    'INSERT INTO leads (name,email,source,status) VALUES (:name,:email,:source,:status)',
    [name,email,source,status]
  );
  res.json({ message: 'Lead added' });
});

// PUT لتحديث Status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  await db.executeQuery('UPDATE leads SET status=:status WHERE id=:id', [status, id]);
  res.json({ message: 'Lead updated' });
});

// DELETE لحذف Lead
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.executeQuery('DELETE FROM leads WHERE id=:id', [id]);
  res.json({ message: 'Lead deleted' });
});

module.exports = router;