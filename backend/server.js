// backend/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./counter.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database');
        db.run(`CREATE TABLE IF NOT EXISTS counter (
            id INTEGER PRIMARY KEY,
            count INTEGER DEFAULT 0
        )`, (err) => {
            if (err) {
                console.error('Error creating table:', err);
            } else {
                db.get('SELECT count FROM counter WHERE id = 1', (err, row) => {
                    if (!row) {
                        db.run('INSERT INTO counter (id, count) VALUES (1, 0)');
                    }
                });
            }
        });
    }
});

app.get('/api/count', (req, res) => {
    db.get('SELECT count FROM counter WHERE id = 1', (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json({ count: row ? row.count : 0 });
        }
    });
});

app.post('/api/increment', (req, res) => {
    db.run('UPDATE counter SET count = count + 1 WHERE id = 1', function(err) {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            db.get('SELECT count FROM counter WHERE id = 1', (err, row) => {
                if (err) {
                    res.status(500).json({ error: 'Database error' });
                } else {
                    res.json({ count: row.count });
                }
            });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});