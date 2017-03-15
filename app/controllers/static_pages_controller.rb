class StaticPagesController < ApplicationController
  def root
    render :root
  end
  
  def letsencrypt
    render text: "V3MmfkQRvlYVXf5WK6xev3TmSJJp4hl1jdXMIXKUZTU.uxS5mcKehnPLRvXiR0yvDk_P1dCN8eQyEboui1W4hGE"
  end
end
