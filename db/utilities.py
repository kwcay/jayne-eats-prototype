"""
Database utility functions.
"""
import sqlite3
from os import path

DB_NAME = 'database.sqlite'
DB_PATH = path.realpath(path.join(path.dirname(__file__), '../data', DB_NAME))


def connect() -> sqlite3.Connection:
    return sqlite3.connect(DB_PATH)


def exists() -> bool:
    return path.isfile(DB_PATH)
