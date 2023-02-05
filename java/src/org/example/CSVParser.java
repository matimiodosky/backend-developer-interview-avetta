package org.example;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CSVParser {
    public CSV parse(String path, String splitter) {

        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            final List<String> headers = Arrays.asList(br.readLine().split(splitter));
            final List<List<String>> records = new ArrayList<>();
            String line = "";
            while ((line = br.readLine()) != null) {
                String[] fields = line.split(splitter);
                records.add(Arrays.asList(fields));
            }
            return new CSV(headers, records);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }
    }
}