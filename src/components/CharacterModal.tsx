import React, { useEffect, useState, useRef } from 'react';
import { type Character } from '../data/characters';
import { useI18n } from '../i18n';
import { X, Copy, Zap, Skull, Heart, Target } from 'lucide-react';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({ character, isOpen, onClose }) => {
  const { t } = useI18n();
  const [showToast, setShowToast] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key press and focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock scrolling
      
      // Auto-focus close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Unlock scrolling
    };
  }, [isOpen, onClose]);

  if (!character) return null;

  const handleCopyPhrase = (phrase: string) => {
    navigator.clipboard.writeText(phrase);
    setShowToast(true);
    // Hide toast after 2 seconds
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? '' : 'hidden'}`}
      onClick={onClose}
      id="character-details-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent close on clicking content
        id="character-details-modal"
        style={{ '--accent-color': character.accentColor } as React.CSSProperties}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          ref={closeButtonRef}
          id="character-modal-close-btn"
          aria-label={t.closeModal}
        >
          <X size={20} />
        </button>

        {/* Modal Grid layout */}
        <div className="modal-grid">
          {/* Left Column: Image & Dossier */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <img 
              src={character.avatar} 
              alt={t.portraitAlt(character.name)} 
              className="modal-character-image"
            />
            
            {/* Tech Specs dossier box */}
            <div className="tech-specs-box" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                color: character.accentColor,
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '0.5rem'
              }}>
                {t.specsTitle}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Zap size={16} style={{ color: character.accentColor, flexShrink: 0 }} />
                  <span><strong>{t.specWeapon}:</strong> {character.specs.weapon}</span>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Heart size={16} style={{ color: character.accentColor, flexShrink: 0 }} />
                  <span><strong>{t.specFuel}:</strong> {character.specs.drink}</span>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Skull size={16} style={{ color: '#ef4444', flexShrink: 0 }} />
                  <span><strong>{t.specWeakness}:</strong> {character.specs.weakness}</span>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Target size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span><strong>{t.specDream}:</strong> {character.specs.dream}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Skills, Stats, Quotes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                <span className="badge-sketch" style={{ color: character.accentColor, borderColor: character.accentColor + '50', background: character.accentColor + '10' }}>
                  {character.role}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  ID-{character.id.toUpperCase()}
                </span>
              </div>
              
              <h1 id="modal-title" style={{ fontSize: '3.6rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                {character.name}
              </h1>
              
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {character.bio}
              </p>
            </div>

            {/* Skills tag group */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
                {t.skillsTitle}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', margin: '-0.3rem' }}>
                {character.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag" style={{ '--accent-color': character.accentColor } as React.CSSProperties}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Performance Stats meters */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
                {t.statsTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {character.stats.map((stat, idx) => (
                  <div className="stat-item" key={idx}>
                    <div className="stat-label-row">
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{stat.label}</span>
                      <span style={{ fontWeight: 600 }}>{stat.value}%</span>
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
            </div>

            {/* Soundboard and Copyable Phrases */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
                {t.phrasesTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {character.phrases.map((phrase, idx) => (
                  <button 
                    key={idx} 
                    className="phrase-bubble"
                    onClick={() => handleCopyPhrase(phrase)}
                    title={t.phraseCopyTitle}
                    style={{ 
                      '--accent-color': character.accentColor, 
                      width: '100%', 
                      textAlign: 'left',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      fontFamily: 'inherit',
                      cursor: 'pointer'
                    } as React.CSSProperties}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                      <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontStyle: 'italic' }}>
                        {phrase}
                      </span>
                      <Copy size={16} style={{ color: 'rgba(255, 255, 255, 0.25)', flexShrink: 0 }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy feedback toast */}
      {showToast && (
        <div className="toast-copied" style={{ borderColor: character.accentColor }}>
          <Zap size={16} style={{ color: character.accentColor }} />
          <span>{t.toastCopied}</span>
        </div>
      )}
    </div>
  );
};
