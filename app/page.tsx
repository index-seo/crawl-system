"use client";
import React, { useState } from 'react';

export default function InstantIndexer() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      setLinks([url, ...links]);
      setUrl("");
    }
  };

  const deleteLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      background: "#f4f7f9",
      color: "#333",
      minHeight: "100vh"
    }}>
      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
      }}>
        <h1>Instant Indexer Pro</h1>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "30px" }}>
          <input 
            type="url" 
            placeholder="আপনার URL এখানে দিন (https://...)" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              border: "2px solid #dfe1e5",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box"
            }}
          />
          <button 
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              background: "#1a73e8",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            Submit to Google Bot
          </button>
        </form>

        <div id="listSection" style={{ marginTop: "40px", borderTop: "2px solid #f1f3f4", paddingTop: "25px" }}>
          <h2 style={{ color: "#5f6368", fontSize: "18px", marginBottom: "15px" }}>সাবমিট করা লিংকগুলো:</h2>
          {links.length === 0 ? (
            <p style={{ color: "#999", textAlign: "center" }}>এখনো কোনো লিংক সাবমিট করা হয়নি।</p>
          ) : (
            links.map((link, index) => (
              <div key={index} style={{
                background: "#fff",
                border: "1px solid #e8eaed",
                padding: "15px",
                marginTop: "12px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <a href={link} target="_blank" rel="noopener noreferrer" style={{
                  color: "#1a73e8",
                  textDecoration: "none",
                  fontWeight: 500,
                  wordBreak: "break-all",
                  width: "75%",
                  fontSize: "15px"
                }}>
                  {link}
                </a>
                <button 
                  onClick={() => deleteLink(index)}
                  style={{
                    background: "#ea4335",
                    color: "white",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
