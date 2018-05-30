"""
Base table class for others to inherit from.
"""
from utilities import connect, exists
from sqlite3 import Connection, IntegrityError


class Abstract:
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

    def create(self) -> True:
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


class FoodsTable(Abstract):
    tableName = 'foods'

    createStatement = """
        CREATE TABLE {tableName} (
            id INTEGER PRIMARY KEY,
            name TEXT UNIQUE NOT NULL DEFAULT '',
            name_fr TEXT NOT NULL DEFAULT ''
        )
        """

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


class IngredientsTable(Abstract):
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


class FoodsIngredientsPivot(Abstract):
    tableName = 'food_ingredient'

    createStatement = """
        CREATE TABLE {tableName} (
            id INTEGER PRIMARY KEY,
            food_id INTEGER NOT NULL REFERENCES foods(id),
            ingredient_id INTEGER NOT NULL REFERENCES ingredients(id)
        )
        """


# List of all tables.
DB_TABLES = [
    FoodsTable,
    IngredientsTable,
    FoodsIngredientsPivot,
]
