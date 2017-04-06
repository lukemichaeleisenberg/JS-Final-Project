import urllib2
request = urllib2.Request("http://developer.nps.gov/api/v0/parks/", headers={"Authorization" : ""})
contents = urllib2.urlopen(request).read()
print contents;
