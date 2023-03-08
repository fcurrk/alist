package conf

const (
	TypeString = "string"
	TypeSelect = "select"
	TypeBool   = "bool"
	TypeText   = "text"
	TypeNumber = "number"
)

const (
	// site
	VERSION      = "version"
	SiteTitle    = "site_title"
	Announcement = "announcement"
	AllowIndexed = "allow_indexed"
        SiteBeian    = "site_beian"
        ContactUs    = "contact_us"
	Logo      = "logo"
        LogoText  = "logo_text"
	Favicon   = "favicon"
	MainColor = "main_color"

	// preview
	TextTypes          = "text_types"
	AudioTypes         = "audio_types"
	VideoTypes         = "video_types"
	ImageTypes         = "image_types"
	ProxyTypes         = "proxy_types"
	ProxyIgnoreHeaders = "proxy_ignore_headers"
	AudioAutoplay      = "audio_autoplay"
	VideoAutoplay      = "video_autoplay"

	// global
	HideFiles               = "hide_files"
	CustomizeHead           = "customize_head"
	CustomizeBody           = "customize_body"
	LinkExpiration          = "link_expiration"
	SignAll                 = "sign_all"
	PrivacyRegs             = "privacy_regs"
	OcrApi                  = "ocr_api"
	FilenameCharMapping     = "filename_char_mapping"
	ForwardDirectLinkParams = "forward_direct_link_params"

	// index
	SearchIndex     = "search_index"
	AutoUpdateIndex = "auto_update_index"
	IgnorePaths     = "ignore_paths"
	MaxIndexDepth   = "max_index_depth"

	// aria2
	Aria2Uri    = "aria2_uri"
	Aria2Secret = "aria2_secret"

	// single
	Token         = "token"
	IndexProgress = "index_progress"

	//SSO
	SSOClientId      = "sso_client_id"
	SSOClientSecret  = "sso_client_secret"
	SSOLoginEnabled  = "sso_login_enabled"
	SSOLoginplatform = "sso_login_platform"

	// qbittorrent
	QbittorrentUrl = "qbittorrent_url"
)

const (
	UNKNOWN = iota
	FOLDER
	//OFFICE
	VIDEO
	AUDIO
	TEXT
	IMAGE
)
