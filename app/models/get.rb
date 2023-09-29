class Get < ApplicationRecord
    geocoded_by :endereco
    after_validation :geocode, if: :will_save_change_to_address?
end
