## API Logs

The APSO team (our team) is currently the owner of the public API
that Avetta provides to its clients. This API was developed
in Scala, and it's in charge of consuming data from many other
Scala services, parsing the data to the desired schema,
and returning the data to the clients.

The support team asked us to generate a report since they want to gain insights into how our clients use our API. To complete this request, we
are planning on using our API logs to build it.

The requirements for the report are:

    - The number of requests made to each endpoint, by client
    - The number of unsuccessful requests made to each endpoint, by client
    - The number of requests made to each endpoint, with certain parameters, by client
    - The average response time for each endpoint, by client
    - The average time between requests to each endpoint, by client


The API logs to build the report are stored in the `logs.csv` file in
the `resources` folder.

Your task is to select three from the five elements in the requirements list,
and to implement the code needed to generate the report.

The results of the report can take any shape you want. You can print them
to the console, store them in a CSV file, JSON file or any other format you
feel comfortable with.

Please don't hesitate to make any questions. The idea of this exercise is
for us to be able to understand the way you design your code and the way you
work around the problems you find. Feel free to Google whatever you need.

# Health endpoint

In order to monitor our services, we have implemented a health endpoint
on each of them. These endpoints work by sending a request to each
of the dependencies that services has, and checking whether all
of them are available. If all dependencies are available, then the service
is healthy.

Your task is to implement the health endpoint using external 
dependencies. You can pick any dependency you want (it can be google.com)
or any other available server.

The response should be successful only if all dependencies are available.