"""
Ingredient schema and model.
"""
from sqlite3 import IntegrityError
from .abstract import AbstractTable


class IngredientsTable(AbstractTable):
    """
    TODO: how should we handle ingredients in other languages?
    """

    tableName = 'ingredients'

    createStatement = """
        CREATE TABLE {tableName} (
            id INTEGER PRIMARY KEY,
            name TEXT UNIQUE NOT NULL DEFAULT '',
            name_fr TEXT NOT NULL DEFAULT ''
        )
        """

    createIndices = [
        'CREATE INDEX {tableName}_name_fr_idx ON {tableName} (name_fr)',
    ]

    def add(self, **kwargs) -> int:
        assert(kwargs.get('name') is not None)

        conn = self.connect()
        cur = conn.cursor()
        stmt = 'INSERT INTO {} (name, name_fr) VALUES (?, ?)'

        try:
            cur.execute(
                stmt.format(self.tableName),
                (kwargs.get('name'), kwargs.get('name_fr', ''))
            )

            conn.commit()
        except IntegrityError as error:
            conn.rollback()

            raise error

        return cur.lastrowid
