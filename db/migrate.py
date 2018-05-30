"""
Creates the database and tables.
"""
import os
from argparse import ArgumentParser

from tables import DB_TABLES
from utilities import connect, DB_PATH

# Retrieve command-line options
parser = ArgumentParser(description='Creates and migrates the database.')
parser.add_argument('-f', '--force', action='store_true')
options = parser.parse_args()

# Checks
if (options.force and os.path.isfile(DB_PATH)):
    print('Dropping database...')
    os.remove(DB_PATH)
elif (os.path.isfile(DB_PATH)):
    print('Database already created.')
    exit(0)

print('Creating database...')

conn = connect()
cur = conn.cursor()

for table in DB_TABLES:
    print('Creating "{}" table...'.format(table.tableName))
    table().create()

conn.commit()
cur.close()
print('Done.')
