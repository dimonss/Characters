import { useState } from 'react';
import { charactersData, type Character } from './data/characters';
import { CharacterCard } from './components/CharacterCard';
import { CharacterModal } from './components/CharacterModal';
import { Search, Tv } from 'lucide-react';

function App() {
  const [characters] = useState<Character[]>(charactersData);
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

  return (
    <>
      {/* Background Animated Glows */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      <div className="container">
        {/* Header Section */}
        <header className="header-area">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <Tv size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.15em' }}>
              YouTube Сериал • Офисный Фронт
            </span>
          </div>
          
          <h1 className="title-main">
            Персонажи
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginTop: '0.75rem', fontWeight: 300 }}>
            Познакомьтесь с командой разработчиков и менеджеров легендарного шоу!
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
              className="sketch-input" 
              placeholder="Поиск по касту (Имя, Скиллы, Роль...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', paddingRight: '3rem' }}
            />
            <Search size={18} style={{ position: 'absolute', right: '16px', color: 'var(--text-secondary)' }} />
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              АКТИВНЫХ ПРОФИЛЕЙ: {filteredCharacters.length}
            </span>
          </div>
        </div>

        {/* Character Card Grid */}
        {filteredCharacters.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '24px', background: 'rgba(255,255,255,0.01)' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              Персонаж не найден... Возможно, его уволили или он ушел в отпуск!
            </p>
            <button 
              className="sketch-button" 
              onClick={() => setSearchTerm('')} 
              style={{ marginTop: '1rem' }}
            >
              Сбросить поиск
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
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;
