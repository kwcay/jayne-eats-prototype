"""
Ingredient schema and model.
"""
from sqlite3 import IntegrityError
from .abstract import AbstractTable


class IngredientsTable(AbstractTable):
    """
    Ingredients table
    """

    table_name = 'ingredients'

    create_statement = """
        CREATE TABLE {table_name} (
            id INTEGER PRIMARY KEY,
            name TEXT UNIQUE NOT NULL DEFAULT '',
            name_fr TEXT NOT NULL DEFAULT ''
        )
        """

    create_indices = [
        'CREATE INDEX {table_name}_name_fr_idx ON {table_name} (name_fr)',
    ]

    lookup_col = 'name'

    def add(self, name) -> int:
        # Check if record already exists.
        record = self.find_record(name)
        if record is not None:
            print(record)
            print(record.name)
            print(dir(record))
            return record.id

        # Insert food record.
        conn = self.connect()

        with conn:
            cur = conn.cursor()

            cur.execute(
                f'INSERT INTO {self.table_name} (name) VALUES (?)', [name]
            )

            record_id = cur.lastrowid

        return record_id

    # def add(self, name=None, **kwargs) -> int:
    #     assert(kwargs.get('name', name) is not None)

    #     conn = self.connect()
    #     cur = conn.cursor()
    #     stmt = 'INSERT INTO {} (name, name_fr) VALUES (?, ?)'

    #     try:
    #         cur.execute(
    #             stmt.format(self.table_name),
    #             (kwargs.get('name', name), kwargs.get('name_fr', ''))
    #         )

    #         conn.commit()
    #     except IntegrityError as error:
    #         conn.rollback()

    #         raise error

    #     return cur.lastrowid

    def get(self, name):
        record = self.find_record(name)
