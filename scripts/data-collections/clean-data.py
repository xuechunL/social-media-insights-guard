import pandas as pd

# Load the CSV file
file_path = './cleaned_sentimentdataset_with_id.csv'
df = pd.read_csv(file_path)

# 转换时间戳并增加新列
df['Datetime'] = pd.to_datetime(df['Timestamp'], dayfirst=True)

# Standardize the 'Platform' column by converting to lowercase and trimming spaces
df['Platform'] = df['Platform'].str.strip()

# Correct common misspellings or variations
# If necessary, add more specific corrections based on actual data
df['Platform'] = df['Platform'].replace({
    'Twittier': 'Twitter',
    'Twiter': 'Twitter',
    # Add more corrections if needed
})

# Verify the changes
platform_counts_cleaned = df['Platform'].value_counts()


# Step 2: Remove spaces from string columns
# Assuming not all columns are strings, we apply str.strip selectively
for col in df.select_dtypes(include=['object']).columns:
    df[col] = df[col].str.strip()

# Step 3: Remove invalid values (NaNs)
df_cleaned = df.dropna()

# Save the cleaned dataset back to a CSV file
cleaned_file_path = './cleaned_sentimentdataset.csv'
df.to_csv(cleaned_file_path, index=False)

platform_counts_cleaned
