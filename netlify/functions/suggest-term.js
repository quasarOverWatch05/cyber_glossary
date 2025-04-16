exports.handler = async function(event) {
  const data = JSON.parse(event.body);
  console.log('New suggested term:', data);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Term received!' })
  };
};
