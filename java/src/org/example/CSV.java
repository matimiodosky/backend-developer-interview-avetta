package org.example;

import java.util.List;

public class CSV {
    private final List<String> headers;

    private final List<List<String>> records;

    public CSV(List<String> headers, List<List<String>> records) {
        this.headers = headers;
        this.records = records;
    }

    public List<String> getHeaders() {
        return headers;
    }

    public List<List<String>> getRecords() {
        return records;
    }
}
