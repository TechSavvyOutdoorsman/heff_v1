module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cc2r319a6gdkbg2etuc0-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'db_5for5_zaml'),
      user: env('DATABASE_USERNAME', 'db_5for5_zaml_user'),
      password: env('DATABASE_PASSWORD', '2LrlKK7CQmggGQ1rAeZMYqa4kLnkXEj1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
