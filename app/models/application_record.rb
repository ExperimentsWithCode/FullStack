class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.rebuild_pg_search_documents
    find_each { |record| record.update_pg_search_document }
end

end
