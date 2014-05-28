function Plaudio() {
  this._p = new Audio();

  // this._p.webkitPreservesPitch = false;
  // this._p.preservesPitch = false;
  this._loopStart = 0;
  this._loopEnd = 0;

  this._n = audioContext.createMediaElementSource(this._p);
}

Plaudio.prototype.connect = function(node) {
  this._n.connect(node);
};

Plaudio.prototype.start = function() {
  this._p.play();
};

Plaudio.prototype.pause = function() {
  this._p.pause();
};

Object.defineProperty(Plaudio.prototype, "volume", {
  set : function(volume){
    this._p.volume = volume;
  },
  get : function(){
    return this._p.volume ;
  }
});

Object.defineProperty(Plaudio.prototype, "source", {
  set : function(src){
    this._p.src = src;
  },
  get : function(){
    return this._p.src ;
  }
});

Object.defineProperty(Plaudio.prototype, "playbackRate", {
  set : function(playbackRate){
    this._p.playbackRate = playbackRate;
  },
  get : function(){
    return this._p.playbackRate ;
  }
});

Object.defineProperty(Plaudio.prototype, "loop", {
  set : function(loop){
    this._p.loop = loop;
    
    function loopFunction(e) {
      if(this._p.loop && this._loopStart !== this._loopEnd && this._p.currentTime >= this._loopEnd) {
        this._p.currentTime = this._loopStart;
      }
    }

    if(!!loop){
      this._p.addEventListener('timeupdate', loopFunction.bind(this), false);
    }else{
      this._p.removeEventListener('timeupdate', loopFunction.bind(this), false);
    }
  },
  get : function(){
    return this._p.loop ;
  }
});

Object.defineProperty(Plaudio.prototype, "loopStart", {
  set : function(start){
    this._loopStart = start;
  },
  get : function(){
    return this._loopStart;
  }
});

Object.defineProperty(Plaudio.prototype, "loopEnd", {
  set : function(end){
    this._loopEnd = end;
  },
  get : function(){
    return this._loopEnd;
  }
});