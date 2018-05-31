"""
Database utility functions.
"""
import sqlite3
from os import path

DB_NAME = 'database.sqlite'
DB_PATH = path.realpath(path.join(path.dirname(__file__), '..', DB_NAME))


def connect() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)

    # Use the dictionary cursor (instead of returning tuples)
    conn.row_factory = sqlite3.Row

    return conn


def exists() -> bool:
    return path.isfile(DB_PATH)
