"""
Provides abstract classes for models and database tables.
"""
from sqlite3 import Connection
from typing import Optional, Union
from .utilities import connect, exists


class AbstractTable:
    """Database table name."""
    table_name = ''

    """SQL create statement for database table."""
    create_statement = ''

    """SQL create statements for indices."""
    create_indices = []

    """Default column to use to retrieve records."""
    lookup_col = ''

    def connect(self) -> Connection:
        """Connects to the SQLite database and returns the connection."""

        if (exists() is False):
            raise Exception('No database found.')

        return connect()

    def create_table(self) -> True:
        """Executes the CREATE statement for the table."""

        assert(len(self.table_name) > 0)
        assert(len(self.create_statement) > 0)

        # Connect to database and create the table.
        conn = self.connect()
        cur = conn.cursor()
        cur.execute(self.create_statement.format(table_name=self.table_name))

        # Create indices, if any.
        for stmt in self.create_indices:
            cur.execute(stmt.format(table_name=self.table_name))

        return True

    def all(self) -> list:
        conn = self.connect()

        with conn:
            cur = conn.cursor()
            cur.execute(f'SELECT * FROM {self.table_name}')
            data = cur.fetchall()

        return data

    def find_record(self, value: Union[int, str], **kwargs) -> dict:
        """Retrieves a model from the database."""

        lookup_col = kwargs.get('col', self.lookup_col)

        assert(len(self.table_name) > 0)
        assert(type(lookup_col) is str)
        assert(len(lookup_col) > 0)

        if type(value) is str:
            assert(len(value) > 0)

        conn = self.connect()

        with conn:
            cur = conn.cursor()
            cur.execute(f'SELECT * FROM {self.table_name} WHERE {lookup_col} = ?', [value])
            data = cur.fetchone()

        return data

    def get_record(self, value: Union[int, str], **kwargs) -> Optional[dict]:
        """Retrieves a record, or creates it if it doesn't exist."""

        lookup_col = kwargs.get('col', self.lookup_col)
        record = self.find_record(value, col=lookup_col)

        if (record is not None):
            return record

        if (callable(getattr(self, 'add'))):
            record_id = self.add(value)

            return self.find_record(record_id, col='id')

        return None
