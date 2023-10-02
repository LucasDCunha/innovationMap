class PagesController < ApplicationController

    def home
        @gets = Get.all
        @markers = @gets.map do |get|
            {
              lat: get.latitude,
              lng: get.longitude,
              info_window_html: render_to_string(partial: "info_window", locals: {get: get})
            }
          end
    end
end
