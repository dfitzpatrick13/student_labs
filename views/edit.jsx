const React = require('react');

function Edit({ log }) {
  return (
    <form action={`/logs/${log._id}?_method=PUT`} method="POST">
      <input type="text" name="title" defaultValue={log.title} />
      <textarea name="entry" defaultValue={log.entry}></textarea>
      <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} />
      <input type="submit" value="Update" />
    </form>
  );
}

module.exports = Edit;
