"""
An example test case.
"""

def inc(x):
    return x + 1

def test_answer():
    """This assert should fail."""
    assert inc(3) == 5
