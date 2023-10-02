class CreateGets < ActiveRecord::Migration[7.0]
  def change
    create_table :gets do |t|

      t.string :name
      t.string :address
      t.integer :cre
      t.string :designacao
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
