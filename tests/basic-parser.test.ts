import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import z from 'zod';

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for (const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV handles commas within quotes", async () => {
  const results = await parseCSV(path.join(__dirname, "../data/commas.csv"))
  expect(results).toHaveLength(3);
  expect(results[0]).toEqual(["name", "age", "comment"]);
  expect(results[1]).toEqual(["Yeeticus", "23", "Hello, world!"]);
  expect(results[2]).toEqual(["Bob", "3", "1,2,3,4,5"]);
});

test("parseCSV empty file", async () => {
  const results = await parseCSV(path.join(__dirname, "../data/empty.csv"))
  expect(results).toHaveLength(0);
});

test("parseCSV empty fields", async () => {
  const results = await parseCSV(path.join(__dirname, "../data/empty-fields.csv"))
  expect(results).toHaveLength(3);
  expect(results[0]).toEqual(["name", "age", "comment"]);
  expect(results[1]).toEqual(["Yeeticus", "", "Hello!"]);
  expect(results[2]).toEqual(["", "30", ""]);
});

test("parseCSV double quotes within quotes", async () => {
  const results =
    await parseCSV(path.join(__dirname, "../data/double-quotes.csv"))
  expect(results).toHaveLength(2);
  expect(results[0]).toEqual(['"', '3', '7']);
  expect(results[1]).toEqual(['he "said"', '5', '']);
});

test("parseCSV line breaks within quotes", async () => {
  const results = await parseCSV(path.join(__dirname, "../data/line-break.csv"))
  expect(results).toHaveLength(3);
  expect(results[0]).toEqual(["name", "age", "comment"]);
  expect(results[1]).toEqual(["Yeeticus", "22", "Hello\nworld!"]);
  expect(results[2]).toEqual(["Bob", "3", "1\n2\n3\n4"]);
});

test("parseCSV with schema", async () => {
  const schema = z.array(z.string().min(1));
  const results = await parseCSV(PEOPLE_CSV_PATH, schema)
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]);
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});







