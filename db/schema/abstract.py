"""
Provides abstract classes for models and database tables.
"""
from sqlite3 import Connection
from typing import Union
from .utilities import connect, exists


class AbstractTable:
    """Database table name."""
    tableName = ''

    """SQL create statement for database table."""
    createStatement = ''

    """SQL create statements for indices."""
    createIndices = []

    def connect(self) -> Connection:
        """Connects to the SQLite database and returns the connection."""

        if (exists() is False):
            raise Exception('No database found.')

        return connect()

    def createTable(self) -> True:
        """Executes the CREATE statement for the table."""

        assert(len(self.tableName) > 0)
        assert(len(self.createStatement) > 0)

        # Connect to database and create the table.
        conn = self.connect()
        cur = conn.cursor()
        cur.execute(self.createStatement.format(tableName=self.tableName))

        # Create indices, if any.
        for stmt in self.createIndices:
            cur.execute(stmt.format(tableName=self.tableName))

        return True

    def findRecord(self, columnName: str, value: Union[int, str]) -> dict:
        """Retrieves a model from the database."""

        assert(len(self.tableName) > 0)
        assert(len(columnName) > 0)

        if type(value) is str:
            assert(len(value) > 0)

        conn = self.connect()

        with conn:
            cur = conn.cursor()
            cur.execute(f'SELECT * FROM {self.tableName} WHERE {columnName} = ?', [value])
            data = cur.fetchone()

        return data
