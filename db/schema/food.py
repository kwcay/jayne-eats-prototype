"""
Food schema and model.
"""
from sqlite3 import IntegrityError
from .abstract import AbstractTable
from .ingredient import IngredientsTable
from .food_ingredient import FoodIngredientPivot


class FoodModel(object):
    """Valid taste values"""
    VALID_TASTES = ['salty', 'sweet', 'sour', 'bitter', 'savoury', 'spicy']

    def __init__(self, **kwargs):
        # Validate name
        name = kwargs.get('name')
        assert(type(name) is str)
        assert(len(name) > 0)

        # Validate ingredients
        ingredients = kwargs.get('ingredients')
        assert(type(ingredients) is list)
        assert(len(ingredients) > 0)

        # Validte score
        score = kwargs.get('score', 3)
        assert(type(score) is int)
        assert(score >= 0)
        assert(score <= 4)

        # Validate state
        state = kwargs.get('state', 'solid')
        assert(type(state) is str)
        assert(state in ['solid', 'liquid', 'gas'])

        # Validate taste
        taste = kwargs.get('taste', [])
        assert(type(taste) is list)
        assert(len(taste) == len(set(taste) & set(self.VALID_TASTES)))

        # Store database-ready values
        self.name, self.score, self.state, self.taste = name, score, state, taste
        self.ingredients = [s.strip().lower() for s in ingredients]


class FoodsTable(AbstractTable):
    """
    Name: a descriptor for the food
    Score: a score between 0 and 4
    """

    table_name = 'foods'

    create_statement = """
        CREATE TABLE {table_name} (
            id INTEGER PRIMARY KEY,
            name TEXT UNIQUE NOT NULL DEFAULT '',
            score INTEGER NOT NULL DEFAULT 2
        )
        """

    lookup_col = 'name'

    def add(self, food: FoodModel) -> int:
        # Check if record already exists.
        record = self.find_record(food.name)
        if record is not None:
            return record.id

        # Insert food record, and create any related ingredient records.
        conn = self.connect()
        ingredients = IngredientsTable()

        with conn:
            cur = conn.cursor()

            # Create ingredient records.
            for ingredient_name in food.ingredients:
                ingredients.get_record(ingredient_name)


            # Insert food record.
            cur.execute(
                f'INSERT INTO {self.table_name} (name, score) VALUES (?, ?)',
                (food.name, food.score)
            )

            record_id = cur.lastrowid

        return record_id
