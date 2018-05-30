# Jayne Eats

# Getting started

You'll need the following pieces of software to get started:

- [Python 3.6](https://www.python.org)

## Setup

Make sure `virtualenv` is installed and setup the virtual environment:

    $ pip install virtualenv
    $ virtualenv venv -p python3.6
    $ source venv/bin/activate

Install the Python dependencies

    (venv) $ pip install -r requirements.txt

The Python environment can be deactivated with the `deactivate` command.

## Migrating the database

The database can be provisionned using:

    (venv) $ python db/migrate.py

To drop the database and re-create it, use the `--force` option.

## Running tests

Todo...
