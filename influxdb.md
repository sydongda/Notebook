# InfluxDB key concepts

## InfluxDB data elements

### Timestamp

All data stored in InfluxDB has a _time column that stores timestamps. On disk, timestamps are stored in epoch nanosecond format. InfluxDB formats timestamps show the date and time in RFC3339 UTC associated with data. Timestamp precision is important when you write data.

### Measurement

The _measurement column shows the name of the measurement census. Measurement names are strings. A measurement acts as a container for tags, fields, and timestamps. Use a measurement name that describes your data. The name census tells us that the field values record the number of bees and ants.

### Fields

A field includes a field key stored in the _field column and a field value stored in the _value column.

### Field key

A field key is a string that represents the name of the field. In the sample data above, bees and ants are field keys.

### Field value

A field value represents the value of an associated field. Field values can be strings, floats, integers, or booleans. The field values in the sample data show the number of bees at specified times: 23, and 28 and the number of ants at a specified time: 30 and 32.

### Field set

A field set is a collection of field key-value pairs associated with a timestamp.

>Fields aren’t indexed: Fields are required in InfluxDB data and are not indexed. Queries that filter field values must scan all field values to match query conditions. As a result, queries on tags > are more performant than queries on fields. Store commonly queried metadata in tags.

### Tags

The columns in the sample data, location and scientist, are tags. Tags include tag keys and tag values that are stored as strings and metadata.

### Tag key

The tag keys in the sample data are location and scientist. For information about tag key requirements, see Line protocol – Tag set.

### Tag value

The tag key location has two tag values: klamath and portland. The tag key scientist also has two tag values: anderson and mullen. For information about tag value requirements, see Line protocol – Tag set.

### Tag set

The collection of tag key-value pairs make up a tag set.

>Tags are indexed: Tags are optional. You don’t need tags in your data structure, but it’s typically a good idea to include tags. Because tags are indexed, queries on tags are faster than queries on fields. This makes tags ideal for storing commonly-queried metadata.

### Bucket schema

In InfluxDB Cloud, a bucket with the explicit schema-type requires an explicit schema for each measurement. Measurements contain tags, fields, and timestamps. An explicit schema constrains the shape of data that can be written to that measurement.

### Series

Now that you’re familiar with measurements, field sets, and tag sets, it’s time to discuss series keys and series. A series key is a collection of points that share a measurement, tag set, and field key. For example, the sample data includes two unique series keys:

Understanding the concept of a series is essential when designing your schema and working with your data in InfluxDB.

### Point

A point includes the series key, a field value, and a timestamp.

### Bucket

All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization

### Organization

An InfluxDB organization is a workspace for a group of users. All dashboards, tasks, buckets, and users belong to an organization.

## Query Data

### Http API

```bash
curl --location --request GET '<ip-address>:<port>/query?q=<your influx sql>&db=<db-name>' \
--header 'Authorization: Token <user-name>:<password>'
```

### InfluxDBClient Api

```Python
from influxdb import InfluxDBClient


cli = InfluxDBClient('<ip-address>', <port>, '<user>', '<password>', '<db-name>')
tables = cli.get_list_measurements()
print(f'tables = {tables}')

# query with series and time filter
query2 = """select * from basedata_second where host='589' and time < '2021-01-01T20:38:42.000000Z'"""
res = cli.query(query2)
print(res)

#get series list
# res = cli.get_list_series(measurement='basedata_second')
# print(res)


# sql2 = "select * from put_pkg_sku limit 10"
# res = cli.query(sql2)
# print(res)

# sql3 = "select * from wms_bwi limit 10"
# res = cli.query(sql3)
# print(res)


# sql4 = "select count(*) from wms_bwi limit 10"
# res = cli.query(sql4)
# print(res)
```

### Influxdb SQL

#### show tags keys

```sql
SHOW TAG KEYS from basedata_second
```

#### show field keys

```sql
SHOW FIELD KEYS from basedata_second
```


#### show SERIES

```sql
show SERIES from put_pkg_sku
```
