class PagesController < ApplicationController

    def home
        @gets = Get.all
        @markers = @gets.map do |get|
            {
              lat: get.latitude,
              lng: get.longitude
            }
          end
    end
end
