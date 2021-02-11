"""
References all available tables

TODO: generate this file automatically
"""

# Main tables
from .food import FoodsTable
from .ingredient import IngredientsTable

# Pivot tables
from .food_ingredient import FoodIngredientPivot


DB_TABLES = [
    FoodsTable,
    IngredientsTable,

    FoodIngredientPivot,
]
