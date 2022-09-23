### show all schema of database
```SQL
select s.name as schema_name, 
    s.schema_id,
    u.name as schema_owner
from sys.schemas s
    inner join sys.sysusers u
        on u.uid = s.principal_id
order by s.name
```
### show current user's permission of a table
```SQL
EXEC sp_table_privileges  @table_name = '<table name>';
```

### show sql history
```SQL
SELECT *
FROM sys.dm_pdw_exec_requests
--WHERE status not in ('Completed','Failed','Cancelled')
where
   session_id <> session_id()
   and command like '%<table name>%'
ORDER BY submit_time DESC;
```

### show running sessions
```SQL
SELECT * FROM sys.dm_pdw_exec_sessions where status <> 'Closed' and session_id <> session_id();
```

使用 DMV 监视 Azure Synapse Analytics 专用 SQL 池工作负载
https://learn.microsoft.com/zh-cn/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-manage-monitor?context=%2Fazure%2Fsynapse-analytics%2Fcontext%2Fcontext
