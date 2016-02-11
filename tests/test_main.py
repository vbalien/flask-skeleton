from flask import url_for


def test_main_home(client):
    assert client.get(url_for('main.home')).status_code == 200
