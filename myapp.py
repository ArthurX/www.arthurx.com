import os
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template
 
class MainPage(webapp.RequestHandler):
   def get(self, p):
      if p:
         page = p + ".html"
      else:
         p = "main"
         page = p + ".html"
 
      if not os.path.exists(page):
         page = "404.html"
 
      template_values = {
            "page" : page,
            p: "first", 
      };
 
      path = os.path.join(os.path.dirname(__file__), 'index.html')
      self.response.out.write(template.render(path, template_values))
 
application = webapp.WSGIApplication([(r'/(.*)', MainPage)],debug=True)
 
def main():
   run_wsgi_app(application)
 
if __name__ == "__main__":
   main()
