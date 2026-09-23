export default async function handler(req, res) {
  try {
    const { default: app } = await import('../src/server.js');
    return app(req, res);
  } catch (err) {
    return res.status(200).json({
      error: 'CRASH_IN_HANDLER',
      message: err.message,
      stack: err.stack
    });
  }
}
