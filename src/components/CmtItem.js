import React from 'react'
import styles from '@/components/style'

export default function CmtItem(item){
    return <div style={styles.item}>
    <h2 style={styles.user}>评论人：{item.user}</h2>
    <p style={styles.content}>评论内容：{item.content}</p>
    </div>
  }