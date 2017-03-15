Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:index, :create, :update, :destroy, :show]
    resources :answers, only: [:create, :update, :destroy, :show]
    resources :votes, only: [:create, :update, :destroy, :show]
  end
  get '/.well-known/acme-challenge/:id' => 'static_pages#letsencrypt'


  root "static_pages#root"

end


# Make sure your web server displays the following content at
# http://heapspill.com/.well-known/acme-challenge/V3MmfkQRvlYVXf5WK6xev3TmSJJp4hl1jdXMIXKUZTU before continuing:
#
# V3MmfkQRvlYVXf5WK6xev3TmSJJp4hl1jdXMIXKUZTU.uxS5mcKehnPLRvXiR0yvDk_P1dCN8eQyEboui1W4hGE
#
# If you don't have HTTP server configured, you can run the following
# command on the target server (as root):
#
# mkdir -p /tmp/certbot/public_html/.well-known/acme-challenge
# cd /tmp/certbot/public_html
# printf "%s" V3MmfkQRvlYVXf5WK6xev3TmSJJp4hl1jdXMIXKUZTU.uxS5mcKehnPLRvXiR0yvDk_P1dCN8eQyEboui1W4hGE > .well-known/acme-challenge/V3MmfkQRvlYVXf5WK6xev3TmSJJp4hl1jdXMIXKUZTU
# # run only once per server:
# $(command -v python2 || command -v python2.7 || command -v python2.6) -c \
# "import BaseHTTPServer, SimpleHTTPServer; \
# s = BaseHTTPServer.HTTPServer(('', 80), SimpleHTTPServer.SimpleHTTPRequestHandler); \
# s.serve_forever()"
