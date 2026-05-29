import { useState, useMemo } from 'react';
import { getCharacters, type Character } from './data/characters';
import { CharacterCard } from './components/CharacterCard';
import { CharacterModal } from './components/CharacterModal';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useI18n } from './i18n';
import { Search, Tv } from 'lucide-react';

function App() {
  const { locale, t } = useI18n();
  const characters = useMemo(() => getCharacters(locale), [locale]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Search filtering
  const filteredCharacters = characters.filter((char) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      char.name.toLowerCase().includes(searchLower) ||
      char.role.toLowerCase().includes(searchLower) ||
      char.bio.toLowerCase().includes(searchLower) ||
      char.skills.some(skill => skill.toLowerCase().includes(searchLower))
    );
  });

  const handleOpenModal = (char: Character) => {
    setSelectedCharacter(char);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCharacter(null);
    }, 300); // Wait for CSS transition
  };

  // When locale changes, update selected character to match the new locale
  const localizedSelectedCharacter = useMemo(() => {
    if (!selectedCharacter) return null;
    return characters.find(c => c.id === selectedCharacter.id) ?? selectedCharacter;
  }, [selectedCharacter, characters]);

  return (
    <>
      {/* Background Animated Glows */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Language Switcher */}
      <LanguageSwitcher />

      <div className="container">
        {/* Header Section */}
        <header className="header-area">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <Tv size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.15em' }}>
              {t.seriesLabel}
            </span>
          </div>
          
          <h1 className="title-main">
            {t.pageTitle}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginTop: '0.75rem', fontWeight: 300 }}>
            {t.pageSubtitle}
          </p>
        </header>

        {/* Search Toolbar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '1.5rem', 
          marginBottom: '4rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '420px' }}>
            <input 
              type="text" 
              id="character-search-input"
              aria-label={t.searchAriaLabel}
              className="sketch-input" 
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', paddingRight: '3rem' }}
            />
            <Search size={18} style={{ position: 'absolute', right: '16px', color: 'var(--text-secondary)' }} />
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {t.activeProfiles}: {filteredCharacters.length}
            </span>
          </div>
        </div>

        {/* Character Card Grid */}
        {filteredCharacters.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '24px', background: 'rgba(255,255,255,0.01)' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              {t.emptyMessage}
            </p>
            <button 
              className="sketch-button" 
              onClick={() => setSearchTerm('')} 
              style={{ marginTop: '1rem' }}
            >
              {t.resetSearch}
            </button>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {filteredCharacters.map((char) => (
              <CharacterCard 
                key={char.id} 
                character={char} 
                onClick={() => handleOpenModal(char)} 
              />
            ))}
          </div>
        )}
      </div>

      {/* Character Details Modal */}
      <CharacterModal 
        character={localizedSelectedCharacter}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;
