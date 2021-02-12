"""
Creates the database and tables.
"""
import os

from schema.all import DB_TABLES
from schema.utilities import connect, DB_PATH


def migrate(**kwargs):
    # Checks
    if (kwargs.get('force') is True and os.path.isfile(DB_PATH)):
        print('Dropping database...')
        os.remove(DB_PATH)
    elif (os.path.isfile(DB_PATH)):
        print('Database already created.')
        return 0

    print('Creating database...')

    conn = connect()
    cur = conn.cursor()

    for table in DB_TABLES:
        print('Creating "{}" table...'.format(table.table_name))
        table().create_table()

    conn.commit()
    cur.close()
    print('Done.')


if __name__ == '__main__':
    from argparse import ArgumentParser

    # Retrieve command-line options
    parser = ArgumentParser(description='Creates and migrates the database.')
    parser.add_argument('-f', '--force', action='store_true')
    options = parser.parse_args()

    exit(migrate(force=options.force))
