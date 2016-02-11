from app import app as create_app
import pytest


@pytest.fixture
def app():
    app = create_app
    return app
