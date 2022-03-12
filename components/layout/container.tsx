const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-5xl px-4 mx-auto'>
      {children}
    </div>
  )
}

export default Container