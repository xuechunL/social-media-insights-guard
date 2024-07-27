import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 确保CSV文件路径正确
csv_file_path = './cleaned_sentimentdataset.csv'

# 读取CSV文件
df = pd.read_csv(csv_file_path)

# 确保'Platform'列存在
if 'Platform' in df.columns:
    # 数据清洗：去除'Platform'列的前后空格
    df['Platform'] = df['Platform'].str.strip()

    # 分析数据：计算每个平台类型的记录数
    platform_distribution = df['Platform'].value_counts()
    
    # 计算每个平台类型的百分比
    platform_percentage = df['Platform'].value_counts(normalize=True) * 100

    # 输出结果
    print("社交媒体平台类型的数据分布：")
    print(platform_distribution)
    print("\n社交媒体平台类型的百分比：")
    print(platform_percentage)
else:
    print("错误：数据中不存在'Platform'列。")
    
# Sentiment Distribution    
# plt.figure(figsize=(8, 6))
# sns.countplot(data=df, x='Sentiment', order=df['Sentiment'].value_counts().index)
# plt.title('Sentiment Distribution of Social Media Posts')
# plt.xlabel('Sentiment')
# plt.ylabel('Number of Posts')
# plt.tight_layout()
# plt.savefig('sentiment_distribution.png')
# plt.show()

# Platform Distribution
# plt.figure(figsize=(10, 6))
# sns.countplot(data=df, x='Platform', order=df['Platform'].value_counts().index)
# plt.title('Preferred Social Media Platforms')
# plt.xlabel('Platform')
# plt.ylabel('Number of Posts')
# plt.tight_layout()
# plt.savefig('platform_preferences.png')
# plt.show()

def process_hashtags(hashtag_str):
    # 检查是否为字符串
    if isinstance(hashtag_str, str):
        # 使用空格分割字符串，去掉每个元素的 '#'，并返回结果
        return [hashtag.strip('#') for hashtag in hashtag_str.split()]
    else:
        # 如果不是字符串，可能是 NaN 或其他类型，返回空数组
        return []

# 应用处理函数到 'hashtags' 列
df['Hashtags'] = df['Hashtags'].apply(process_hashtags)

# 验证结果
print(df['Hashtags'].head())