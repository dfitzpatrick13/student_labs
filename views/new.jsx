
const React = require('react');

function New() {
  return (
    <form action="/logs" method="POST">
      <input type="text" name="title" placeholder="Title" />
      <textarea name="entry" placeholder="Entry"></textarea>
      <input type="checkbox" name="shipIsBroken" />
      <input type="submit" value="Submit" />
    </form>
  );
}

module.exports = New;
