class CreateGets < ActiveRecord::Migration[7.0]
  def change
    create_table :gets do |t|

      t.string :nome
      t.string :endereco
      t.float :latitude
      t.float :longetude
      t.timestamps
    end
  end
end
