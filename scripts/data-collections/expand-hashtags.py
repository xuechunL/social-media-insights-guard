import pandas as pd

# 确保CSV文件路径正确
csv_file_path = './cleaned_sentimentdataset.csv'

# 读取CSV文件
df = pd.read_csv(csv_file_path)

# 步骤 2: 处理 `Hashtags` 列，将字符串转换为列表
df['Hashtags'] = df['Hashtags'].apply(lambda x: x.split('#') if isinstance(x, str) else [])

# 步骤 3: 扩展 DataFrame
rows = []
for index, row in df.iterrows():
    for hashtag in row['Hashtags']:
        new_row = row.to_dict()
        new_row['Hashtags'] = hashtag.strip()
        rows.append(new_row)
df_expanded = pd.DataFrame(rows)

# Step 2: Filter out rows with empty 'Hashtags' values
df_expanded = df_expanded[df_expanded['Hashtags'].notna() & (df_expanded['Hashtags'] != '')]

df_expanded.reset_index(inplace=True)

# 步骤 5: 重命名原有的 `ID` 列为 `TextId`

df_expanded.rename(columns={'ID': 'TextId'}, inplace=True)
# 步骤 4: 添加 `ID` 列
df_expanded.rename(columns={'index': 'ID'}, inplace=True)

# 步骤 6: 保存到新的 CSV 文件
df_expanded.to_csv('expanded_hashtags_with_id.csv', index=False)

print("Expanded hashtags with new ID saved to 'expanded_hashtags_with_id.csv'.")