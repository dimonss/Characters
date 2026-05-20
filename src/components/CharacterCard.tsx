import React from 'react';
import { type Character } from '../data/characters';
import { Terminal, Award } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  // Show top 3 stats on the card preview
  const previewStats = character.stats.slice(0, 3);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      className="character-card" 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      id={`character-card-${character.id}`}
      aria-label={`Профиль персонажа: ${character.name}, роль: ${character.role}. Нажмите для просмотра личного дела.`}
      style={{ '--accent-color': character.accentColor } as React.CSSProperties}
    >
      <div className="character-card-image-container">
        <img 
          src={character.avatar} 
          alt={character.name} 
          className="character-card-image"
        />
        <div 
          className="badge-sketch" 
          style={{ 
            position: 'absolute', 
            bottom: '16px', 
            left: '16px',
            background: 'rgba(7, 5, 15, 0.75)',
            backdropFilter: 'blur(8px)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF'
          }}
        >
          {character.role}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            {character.name}
          </h2>
          {character.id === 'vitalik' ? (
            <Terminal size={20} style={{ color: character.accentColor }} />
          ) : (
            <Award size={20} style={{ color: character.accentColor }} />
          )}
        </div>
        
        {/* Preview Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.25rem 0' }}>
          {previewStats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <div className="stat-label-row">
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>{stat.label}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{stat.value}%</span>
              </div>
              <div className="stat-bar-container">
                <div 
                  className="stat-bar-fill" 
                  style={{ width: `${stat.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Famous Quote preview */}
        <div 
          style={{ 
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '0.75rem',
            lineHeight: 1.4
          }}
        >
          {character.phrases[0]}
        </div>
      </div>
    </div>
  );
};
