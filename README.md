##News Reader
This app allows users to make multiple feeds of news articles (each item links to the article) using RSS feeds submitted by the user. Updates every 30 seconds.

To run locally:

* `bundle install`
* `bundle exec rake db:create db:migrate db:seed`

Three feeds with their entries will be created upon running `rake
db:seed`.