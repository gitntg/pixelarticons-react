"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = exports.Table = exports.Tea = exports.Teach = exports.TextAdd = exports.TextColums = exports.TextSearch = exports.TextWrap = exports.Timeline = exports.ToggleLeft = exports.ToggleRight = exports.Tournament = exports.TrackChanges = exports.TrashAlt = exports.Trash = exports.TrendingDown = exports.TrendingUp = exports.Trending = exports.Trophy = exports.Truck = exports.Undo = exports.Ungroup = exports.Unlink = exports.Upload = exports.UserMinus = exports.UserPlus = exports.UserX = exports.User = exports.Users = exports.VideoOff = exports.Video = exports.ViewCol = exports.ViewList = exports.ViewportNarrow = exports.ViewportWide = exports.Visible = exports.Volume1 = exports.Volume2 = exports.Volume3 = exports.VolumeMinus = exports.VolumePlus = exports.VolumeVibrate = exports.VolumeX = exports.Volume = exports.Wallet = exports.WarningBox = exports.Wind = exports.Zap = exports.ZoomIn = exports.ZoomOut = void 0;
exports.RadioSignal = exports.RadioTower = exports.RecieptAlt = exports.Reciept = exports.Redo = exports.Reload = exports.RemoveBoxMultiple = exports.RemoveBox = exports.Repeat = exports.ReplyAll = exports.Reply = exports.RoundedCorner = exports.Save = exports.Scale = exports.ScriptText = exports.Script = exports.ScrollHorizontal = exports.ScrollVertical = exports.Sd = exports.Search = exports.SectionCopy = exports.SectionMinus = exports.SectionPlus = exports.SectionX = exports.Section = exports.Server = exports.SharpCorner = exports.ShieldOff = exports.Shield = exports.Ship = exports.ShoppingBag = exports.Shuffle = exports.Sliders2 = exports.Sliders = exports.SortAlphabetic = exports.SortNumeric = exports.Sort = exports.Speaker = exports.SpeedFast = exports.SpeedMedium = exports.SpeedSlow = exports.Spotlight = exports.Store = exports.Subscriptions = exports.Subtitles = exports.Suitcase = exports.SunAlt = exports.Sun = exports.Switch = exports.Sync = void 0;
exports.MessagePlus = exports.MessageProcessing = exports.MessageReply = exports.MessageText = exports.Message = exports.Minus = exports.MissedCall = exports.Modem = exports.Money = exports.Monitor = exports.MoodHappy = exports.MoodNeutral = exports.MoodSad = exports.MoonStar = exports.MoonStars = exports.Moon = exports.MoreHorizontal = exports.MoreVertical = exports.Mouse = exports.Move = exports.Movie = exports.Music = exports.Next = exports.NoteDelete = exports.NoteMultiple = exports.NotePlus = exports.Note = exports.NotesDelete = exports.NotesMultiple = exports.NotesPlus = exports.Notes = exports.NotificationOff = exports.Notification = exports.Open = exports.PaintBucket = exports.Paperclip = exports.Pause = exports.Percent = exports.PictureInPictureAlt = exports.PictureInPicture = exports.Pin = exports.Pixelarticons = exports.Play = exports.Playlist = exports.Plus = exports.Power = exports.Prev = exports.Print = exports.RadioHandheld = exports.RadioOn = void 0;
exports.Keyboard = exports.LabelAltMultiple = exports.LabelAlt = exports.LabelSharp = exports.Label = exports.LayoutAlignBottom = exports.LayoutAlignLeft = exports.LayoutAlignRight = exports.LayoutAlignTop = exports.LayoutColumns = exports.LayoutDistributeHorizontal = exports.LayoutDistributeVertical = exports.LayoutFooter = exports.LayoutHeader = exports.LayoutRows = exports.LayoutSidebarLeft = exports.LayoutSidebarRight = exports.Layout = exports.Lightbulb2 = exports.LightbulbOn = exports.Lightbulb = exports.Link = exports.ListBox = exports.List = exports.Loader = exports.LockOpen = exports.Lock = exports.Login = exports.Logout = exports.Luggage = exports.MailArrowRight = exports.MailCheck = exports.MailDelete = exports.MailFlash = exports.MailMultiple = exports.MailOff = exports.MailUnread = exports.Mail = exports.Map = exports.Mastodon = exports.Membercard = exports.Menu = exports.MessageArrowLeft = exports.MessageArrowRight = exports.MessageBookmark = exports.MessageClock = exports.MessageDelete = exports.MessageFlash = exports.MessageImage = exports.MessageMinus = void 0;
exports.Forward = exports.Forwardburger = exports.FrameAdd = exports.FrameCheck = exports.FrameDelete = exports.FrameMinus = exports.Frame = exports.Gamepad = exports.Gif = exports.Gift = exports.GitBranch = exports.GitCommit = exports.GitMerge = exports.GitPullRequest = exports.Github2 = exports.Github = exports.Gps = exports.Grid = exports.Group = exports.Hd = exports.Headphone = exports.Headset = exports.Heart = exports.Hidden = exports.Home = exports.Hourglass = exports.Hq = exports.HumanHandsdown = exports.HumanHandsup = exports.HumanHeightAlt = exports.HumanHeight = exports.HumanRun = exports.Human = exports.ImageArrowRight = exports.ImageBroken = exports.ImageDelete = exports.ImageFlash = exports.ImageFrame = exports.ImageGallery = exports.ImageMultiple = exports.ImageNew = exports.ImagePlus = exports.Image = exports.InboxAll = exports.InboxFull = exports.Inbox = exports.InfoBox = exports.Invert = exports.Iso = exports.Kanban = void 0;
exports.Delete = exports.Deskphone = exports.DeviceLaptop = exports.DevicePhone = exports.DeviceTablet = exports.DeviceTvSmart = exports.DeviceTv = exports.DeviceVibrate = exports.DeviceWatch = exports.Devices = exports.Dice = exports.Dollar = exports.Downasaur = exports.Download = exports.Draft = exports.DragAndDrop = exports.DropArea = exports.DropFull = exports.DropHalf = exports.Drop = exports.DuplicateAlt = exports.Duplicate = exports.EditBox = exports.Edit = exports.Euro = exports.Expand = exports.ExternalLink = exports.EyeClosed = exports.Eye = exports.FileAlt = exports.FileDelete = exports.FileFlash = exports.FileMinus = exports.FileMultiple = exports.FileOff = exports.FilePlus = exports.File = exports.FillHalf = exports.Fill = exports.Flag = exports.Flatten = exports.FlipToBack = exports.FlipToFront = exports.FloatCenter = exports.FloatLeft = exports.FloatRight = exports.FolderMinus = exports.FolderPlus = exports.FolderX = exports.Folder = void 0;
exports.ChevronsVertical = exports.Circle = exports.Clipboard = exports.Clock = exports.CloseBox = exports.Close = exports.CloudDone = exports.CloudDownload = exports.CloudMoon = exports.CloudSun = exports.CloudUpload = exports.Cloud = exports.Cocktail = exports.Code = exports.CoffeeAlt = exports.Coffee = exports.Coin = exports.Collapse = exports.ColorsSwatch = exports.Command = exports.Comment = exports.ContactDelete = exports.ContactMultiple = exports.ContactPlus = exports.Contact = exports.Copy = exports.CornerDownLeft = exports.CornerDownRight = exports.CornerLeftDown = exports.CornerLeftUp = exports.CornerRightDown = exports.CornerRightUp = exports.CornerUpLeft = exports.CornerUpRight = exports.CreditCardDelete = exports.CreditCardMinus = exports.CreditCardMultiple = exports.CreditCardPlus = exports.CreditCardSettings = exports.CreditCardWireless = exports.CreditCard = exports.Crop = exports.Cut = exports.Dashboard = exports.DebugCheck = exports.DebugOff = exports.DebugPause = exports.DebugPlay = exports.DebugStop = exports.Debug = void 0;
exports.CalendarMultipleCheck = exports.CalendarMultiple = exports.CalendarPlus = exports.CalendarRange = exports.CalendarRemove = exports.CalendarSearch = exports.CalendarSortAscending = exports.CalendarSortDescending = exports.CalendarText = exports.CalendarToday = exports.CalendarTomorrow = exports.CalendarWeekBegin = exports.CalendarWeek = exports.CalendarWeekend = exports.Calendar = exports.CameraAdd = exports.CameraAlt = exports.CameraFace = exports.Camera = exports.Car = exports.CardId = exports.CardPlus = exports.CardStack = exports.CardText = exports.Card = exports.Cart = exports.Cast = exports.CellularSignal0 = exports.CellularSignal1 = exports.CellularSignal2 = exports.CellularSignal3 = exports.CellularSignalOff = exports.ChartAdd = exports.ChartBar = exports.ChartDelete = exports.ChartMinus = exports.ChartMultiple = exports.Chart = exports.Chat = exports.CheckDouble = exports.Check = exports.CheckboxOn = exports.Checkbox = exports.Checklist = exports.Chess = exports.ChevronDown = exports.ChevronLeft = exports.ChevronRight = exports.ChevronUp = exports.ChevronsHorizontal = void 0;
exports.ArticleMultiple = exports.Article = exports.AspectRatio = exports.At = exports.Attachment = exports.AudioDevice = exports.Avatar = exports.Backburger = exports.Battery1 = exports.Battery2 = exports.BatteryCharging = exports.BatteryFull = exports.Battery = exports.Bed = exports.Bitcoin = exports.Bluetooth = exports.BookOpen = exports.Book = exports.Bookmark = exports.Bookmarks = exports.BriefcaseAccount = exports.BriefcaseCheck = exports.BriefcaseDelete = exports.BriefcaseDownload = exports.BriefcaseMinus = exports.BriefcasePlus = exports.BriefcaseSearch1 = exports.BriefcaseSearch = exports.BriefcaseUpload = exports.Briefcase = exports.Bug = exports.BuildingCommunity = exports.BuildingSkyscraper = exports.Building = exports.Buildings = exports.Bulletlist = exports.BullseyeArrow = exports.Bullseye = exports.Bus = exports.Cake = exports.Calculator = exports.CalendarAlert = exports.CalendarArrowLeft = exports.CalendarArrowRight = exports.CalendarCheck = exports.CalendarExport = exports.CalendarGrid = exports.CalendarImport = exports.CalendarMinus = exports.CalendarMonth = void 0;
exports.componentToOriginal = exports.originalToComponent = exports.IconMap = exports.Icon4g = exports.Icon4kBox = exports.Icon4k = exports.Icon5g = exports.AbTesting = exports.Ac = exports.AddBoxMultiple = exports.AddBox = exports.AddCol = exports.AddGrid = exports.AddRow = exports.Alert = exports.AlignCenter = exports.AlignJustify = exports.AlignLeft = exports.AlignRight = exports.Analytics = exports.Anchor = exports.Android = exports.Animation = exports.Archive = exports.ArrowBarDown = exports.ArrowBarLeft = exports.ArrowBarRight = exports.ArrowBarUp = exports.ArrowDownBox = exports.ArrowDown = exports.ArrowLeftBox = exports.ArrowLeft = exports.ArrowRightBox = exports.ArrowRight = exports.ArrowUpBox = exports.ArrowUp = exports.ArrowsHorizontal = exports.ArrowsVertical = exports.ArtText = void 0;
const ZoomOut_1 = require("./components/ZoomOut");
Object.defineProperty(exports, "ZoomOut", { enumerable: true, get: function () { return ZoomOut_1.ZoomOut; } });
const ZoomIn_1 = require("./components/ZoomIn");
Object.defineProperty(exports, "ZoomIn", { enumerable: true, get: function () { return ZoomIn_1.ZoomIn; } });
const Zap_1 = require("./components/Zap");
Object.defineProperty(exports, "Zap", { enumerable: true, get: function () { return Zap_1.Zap; } });
const Wind_1 = require("./components/Wind");
Object.defineProperty(exports, "Wind", { enumerable: true, get: function () { return Wind_1.Wind; } });
const WarningBox_1 = require("./components/WarningBox");
Object.defineProperty(exports, "WarningBox", { enumerable: true, get: function () { return WarningBox_1.WarningBox; } });
const Wallet_1 = require("./components/Wallet");
Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return Wallet_1.Wallet; } });
const Volume_1 = require("./components/Volume");
Object.defineProperty(exports, "Volume", { enumerable: true, get: function () { return Volume_1.Volume; } });
const VolumeX_1 = require("./components/VolumeX");
Object.defineProperty(exports, "VolumeX", { enumerable: true, get: function () { return VolumeX_1.VolumeX; } });
const VolumeVibrate_1 = require("./components/VolumeVibrate");
Object.defineProperty(exports, "VolumeVibrate", { enumerable: true, get: function () { return VolumeVibrate_1.VolumeVibrate; } });
const VolumePlus_1 = require("./components/VolumePlus");
Object.defineProperty(exports, "VolumePlus", { enumerable: true, get: function () { return VolumePlus_1.VolumePlus; } });
const VolumeMinus_1 = require("./components/VolumeMinus");
Object.defineProperty(exports, "VolumeMinus", { enumerable: true, get: function () { return VolumeMinus_1.VolumeMinus; } });
const Volume3_1 = require("./components/Volume3");
Object.defineProperty(exports, "Volume3", { enumerable: true, get: function () { return Volume3_1.Volume3; } });
const Volume2_1 = require("./components/Volume2");
Object.defineProperty(exports, "Volume2", { enumerable: true, get: function () { return Volume2_1.Volume2; } });
const Volume1_1 = require("./components/Volume1");
Object.defineProperty(exports, "Volume1", { enumerable: true, get: function () { return Volume1_1.Volume1; } });
const Visible_1 = require("./components/Visible");
Object.defineProperty(exports, "Visible", { enumerable: true, get: function () { return Visible_1.Visible; } });
const ViewportWide_1 = require("./components/ViewportWide");
Object.defineProperty(exports, "ViewportWide", { enumerable: true, get: function () { return ViewportWide_1.ViewportWide; } });
const ViewportNarrow_1 = require("./components/ViewportNarrow");
Object.defineProperty(exports, "ViewportNarrow", { enumerable: true, get: function () { return ViewportNarrow_1.ViewportNarrow; } });
const ViewList_1 = require("./components/ViewList");
Object.defineProperty(exports, "ViewList", { enumerable: true, get: function () { return ViewList_1.ViewList; } });
const ViewCol_1 = require("./components/ViewCol");
Object.defineProperty(exports, "ViewCol", { enumerable: true, get: function () { return ViewCol_1.ViewCol; } });
const Video_1 = require("./components/Video");
Object.defineProperty(exports, "Video", { enumerable: true, get: function () { return Video_1.Video; } });
const VideoOff_1 = require("./components/VideoOff");
Object.defineProperty(exports, "VideoOff", { enumerable: true, get: function () { return VideoOff_1.VideoOff; } });
const Users_1 = require("./components/Users");
Object.defineProperty(exports, "Users", { enumerable: true, get: function () { return Users_1.Users; } });
const User_1 = require("./components/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const UserX_1 = require("./components/UserX");
Object.defineProperty(exports, "UserX", { enumerable: true, get: function () { return UserX_1.UserX; } });
const UserPlus_1 = require("./components/UserPlus");
Object.defineProperty(exports, "UserPlus", { enumerable: true, get: function () { return UserPlus_1.UserPlus; } });
const UserMinus_1 = require("./components/UserMinus");
Object.defineProperty(exports, "UserMinus", { enumerable: true, get: function () { return UserMinus_1.UserMinus; } });
const Upload_1 = require("./components/Upload");
Object.defineProperty(exports, "Upload", { enumerable: true, get: function () { return Upload_1.Upload; } });
const Unlink_1 = require("./components/Unlink");
Object.defineProperty(exports, "Unlink", { enumerable: true, get: function () { return Unlink_1.Unlink; } });
const Ungroup_1 = require("./components/Ungroup");
Object.defineProperty(exports, "Ungroup", { enumerable: true, get: function () { return Ungroup_1.Ungroup; } });
const Undo_1 = require("./components/Undo");
Object.defineProperty(exports, "Undo", { enumerable: true, get: function () { return Undo_1.Undo; } });
const Truck_1 = require("./components/Truck");
Object.defineProperty(exports, "Truck", { enumerable: true, get: function () { return Truck_1.Truck; } });
const Trophy_1 = require("./components/Trophy");
Object.defineProperty(exports, "Trophy", { enumerable: true, get: function () { return Trophy_1.Trophy; } });
const Trending_1 = require("./components/Trending");
Object.defineProperty(exports, "Trending", { enumerable: true, get: function () { return Trending_1.Trending; } });
const TrendingUp_1 = require("./components/TrendingUp");
Object.defineProperty(exports, "TrendingUp", { enumerable: true, get: function () { return TrendingUp_1.TrendingUp; } });
const TrendingDown_1 = require("./components/TrendingDown");
Object.defineProperty(exports, "TrendingDown", { enumerable: true, get: function () { return TrendingDown_1.TrendingDown; } });
const Trash_1 = require("./components/Trash");
Object.defineProperty(exports, "Trash", { enumerable: true, get: function () { return Trash_1.Trash; } });
const TrashAlt_1 = require("./components/TrashAlt");
Object.defineProperty(exports, "TrashAlt", { enumerable: true, get: function () { return TrashAlt_1.TrashAlt; } });
const TrackChanges_1 = require("./components/TrackChanges");
Object.defineProperty(exports, "TrackChanges", { enumerable: true, get: function () { return TrackChanges_1.TrackChanges; } });
const Tournament_1 = require("./components/Tournament");
Object.defineProperty(exports, "Tournament", { enumerable: true, get: function () { return Tournament_1.Tournament; } });
const ToggleRight_1 = require("./components/ToggleRight");
Object.defineProperty(exports, "ToggleRight", { enumerable: true, get: function () { return ToggleRight_1.ToggleRight; } });
const ToggleLeft_1 = require("./components/ToggleLeft");
Object.defineProperty(exports, "ToggleLeft", { enumerable: true, get: function () { return ToggleLeft_1.ToggleLeft; } });
const Timeline_1 = require("./components/Timeline");
Object.defineProperty(exports, "Timeline", { enumerable: true, get: function () { return Timeline_1.Timeline; } });
const TextWrap_1 = require("./components/TextWrap");
Object.defineProperty(exports, "TextWrap", { enumerable: true, get: function () { return TextWrap_1.TextWrap; } });
const TextSearch_1 = require("./components/TextSearch");
Object.defineProperty(exports, "TextSearch", { enumerable: true, get: function () { return TextSearch_1.TextSearch; } });
const TextColums_1 = require("./components/TextColums");
Object.defineProperty(exports, "TextColums", { enumerable: true, get: function () { return TextColums_1.TextColums; } });
const TextAdd_1 = require("./components/TextAdd");
Object.defineProperty(exports, "TextAdd", { enumerable: true, get: function () { return TextAdd_1.TextAdd; } });
const Teach_1 = require("./components/Teach");
Object.defineProperty(exports, "Teach", { enumerable: true, get: function () { return Teach_1.Teach; } });
const Tea_1 = require("./components/Tea");
Object.defineProperty(exports, "Tea", { enumerable: true, get: function () { return Tea_1.Tea; } });
const Table_1 = require("./components/Table");
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return Table_1.Table; } });
const Tab_1 = require("./components/Tab");
Object.defineProperty(exports, "Tab", { enumerable: true, get: function () { return Tab_1.Tab; } });
const Sync_1 = require("./components/Sync");
Object.defineProperty(exports, "Sync", { enumerable: true, get: function () { return Sync_1.Sync; } });
const Switch_1 = require("./components/Switch");
Object.defineProperty(exports, "Switch", { enumerable: true, get: function () { return Switch_1.Switch; } });
const Sun_1 = require("./components/Sun");
Object.defineProperty(exports, "Sun", { enumerable: true, get: function () { return Sun_1.Sun; } });
const SunAlt_1 = require("./components/SunAlt");
Object.defineProperty(exports, "SunAlt", { enumerable: true, get: function () { return SunAlt_1.SunAlt; } });
const Suitcase_1 = require("./components/Suitcase");
Object.defineProperty(exports, "Suitcase", { enumerable: true, get: function () { return Suitcase_1.Suitcase; } });
const Subtitles_1 = require("./components/Subtitles");
Object.defineProperty(exports, "Subtitles", { enumerable: true, get: function () { return Subtitles_1.Subtitles; } });
const Subscriptions_1 = require("./components/Subscriptions");
Object.defineProperty(exports, "Subscriptions", { enumerable: true, get: function () { return Subscriptions_1.Subscriptions; } });
const Store_1 = require("./components/Store");
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return Store_1.Store; } });
const Spotlight_1 = require("./components/Spotlight");
Object.defineProperty(exports, "Spotlight", { enumerable: true, get: function () { return Spotlight_1.Spotlight; } });
const SpeedSlow_1 = require("./components/SpeedSlow");
Object.defineProperty(exports, "SpeedSlow", { enumerable: true, get: function () { return SpeedSlow_1.SpeedSlow; } });
const SpeedMedium_1 = require("./components/SpeedMedium");
Object.defineProperty(exports, "SpeedMedium", { enumerable: true, get: function () { return SpeedMedium_1.SpeedMedium; } });
const SpeedFast_1 = require("./components/SpeedFast");
Object.defineProperty(exports, "SpeedFast", { enumerable: true, get: function () { return SpeedFast_1.SpeedFast; } });
const Speaker_1 = require("./components/Speaker");
Object.defineProperty(exports, "Speaker", { enumerable: true, get: function () { return Speaker_1.Speaker; } });
const Sort_1 = require("./components/Sort");
Object.defineProperty(exports, "Sort", { enumerable: true, get: function () { return Sort_1.Sort; } });
const SortNumeric_1 = require("./components/SortNumeric");
Object.defineProperty(exports, "SortNumeric", { enumerable: true, get: function () { return SortNumeric_1.SortNumeric; } });
const SortAlphabetic_1 = require("./components/SortAlphabetic");
Object.defineProperty(exports, "SortAlphabetic", { enumerable: true, get: function () { return SortAlphabetic_1.SortAlphabetic; } });
const Sliders_1 = require("./components/Sliders");
Object.defineProperty(exports, "Sliders", { enumerable: true, get: function () { return Sliders_1.Sliders; } });
const Sliders2_1 = require("./components/Sliders2");
Object.defineProperty(exports, "Sliders2", { enumerable: true, get: function () { return Sliders2_1.Sliders2; } });
const Shuffle_1 = require("./components/Shuffle");
Object.defineProperty(exports, "Shuffle", { enumerable: true, get: function () { return Shuffle_1.Shuffle; } });
const ShoppingBag_1 = require("./components/ShoppingBag");
Object.defineProperty(exports, "ShoppingBag", { enumerable: true, get: function () { return ShoppingBag_1.ShoppingBag; } });
const Ship_1 = require("./components/Ship");
Object.defineProperty(exports, "Ship", { enumerable: true, get: function () { return Ship_1.Ship; } });
const Shield_1 = require("./components/Shield");
Object.defineProperty(exports, "Shield", { enumerable: true, get: function () { return Shield_1.Shield; } });
const ShieldOff_1 = require("./components/ShieldOff");
Object.defineProperty(exports, "ShieldOff", { enumerable: true, get: function () { return ShieldOff_1.ShieldOff; } });
const SharpCorner_1 = require("./components/SharpCorner");
Object.defineProperty(exports, "SharpCorner", { enumerable: true, get: function () { return SharpCorner_1.SharpCorner; } });
const Server_1 = require("./components/Server");
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return Server_1.Server; } });
const Section_1 = require("./components/Section");
Object.defineProperty(exports, "Section", { enumerable: true, get: function () { return Section_1.Section; } });
const SectionX_1 = require("./components/SectionX");
Object.defineProperty(exports, "SectionX", { enumerable: true, get: function () { return SectionX_1.SectionX; } });
const SectionPlus_1 = require("./components/SectionPlus");
Object.defineProperty(exports, "SectionPlus", { enumerable: true, get: function () { return SectionPlus_1.SectionPlus; } });
const SectionMinus_1 = require("./components/SectionMinus");
Object.defineProperty(exports, "SectionMinus", { enumerable: true, get: function () { return SectionMinus_1.SectionMinus; } });
const SectionCopy_1 = require("./components/SectionCopy");
Object.defineProperty(exports, "SectionCopy", { enumerable: true, get: function () { return SectionCopy_1.SectionCopy; } });
const Search_1 = require("./components/Search");
Object.defineProperty(exports, "Search", { enumerable: true, get: function () { return Search_1.Search; } });
const Sd_1 = require("./components/Sd");
Object.defineProperty(exports, "Sd", { enumerable: true, get: function () { return Sd_1.Sd; } });
const ScrollVertical_1 = require("./components/ScrollVertical");
Object.defineProperty(exports, "ScrollVertical", { enumerable: true, get: function () { return ScrollVertical_1.ScrollVertical; } });
const ScrollHorizontal_1 = require("./components/ScrollHorizontal");
Object.defineProperty(exports, "ScrollHorizontal", { enumerable: true, get: function () { return ScrollHorizontal_1.ScrollHorizontal; } });
const Script_1 = require("./components/Script");
Object.defineProperty(exports, "Script", { enumerable: true, get: function () { return Script_1.Script; } });
const ScriptText_1 = require("./components/ScriptText");
Object.defineProperty(exports, "ScriptText", { enumerable: true, get: function () { return ScriptText_1.ScriptText; } });
const Scale_1 = require("./components/Scale");
Object.defineProperty(exports, "Scale", { enumerable: true, get: function () { return Scale_1.Scale; } });
const Save_1 = require("./components/Save");
Object.defineProperty(exports, "Save", { enumerable: true, get: function () { return Save_1.Save; } });
const RoundedCorner_1 = require("./components/RoundedCorner");
Object.defineProperty(exports, "RoundedCorner", { enumerable: true, get: function () { return RoundedCorner_1.RoundedCorner; } });
const Reply_1 = require("./components/Reply");
Object.defineProperty(exports, "Reply", { enumerable: true, get: function () { return Reply_1.Reply; } });
const ReplyAll_1 = require("./components/ReplyAll");
Object.defineProperty(exports, "ReplyAll", { enumerable: true, get: function () { return ReplyAll_1.ReplyAll; } });
const Repeat_1 = require("./components/Repeat");
Object.defineProperty(exports, "Repeat", { enumerable: true, get: function () { return Repeat_1.Repeat; } });
const RemoveBox_1 = require("./components/RemoveBox");
Object.defineProperty(exports, "RemoveBox", { enumerable: true, get: function () { return RemoveBox_1.RemoveBox; } });
const RemoveBoxMultiple_1 = require("./components/RemoveBoxMultiple");
Object.defineProperty(exports, "RemoveBoxMultiple", { enumerable: true, get: function () { return RemoveBoxMultiple_1.RemoveBoxMultiple; } });
const Reload_1 = require("./components/Reload");
Object.defineProperty(exports, "Reload", { enumerable: true, get: function () { return Reload_1.Reload; } });
const Redo_1 = require("./components/Redo");
Object.defineProperty(exports, "Redo", { enumerable: true, get: function () { return Redo_1.Redo; } });
const Reciept_1 = require("./components/Reciept");
Object.defineProperty(exports, "Reciept", { enumerable: true, get: function () { return Reciept_1.Reciept; } });
const RecieptAlt_1 = require("./components/RecieptAlt");
Object.defineProperty(exports, "RecieptAlt", { enumerable: true, get: function () { return RecieptAlt_1.RecieptAlt; } });
const RadioTower_1 = require("./components/RadioTower");
Object.defineProperty(exports, "RadioTower", { enumerable: true, get: function () { return RadioTower_1.RadioTower; } });
const RadioSignal_1 = require("./components/RadioSignal");
Object.defineProperty(exports, "RadioSignal", { enumerable: true, get: function () { return RadioSignal_1.RadioSignal; } });
const RadioOn_1 = require("./components/RadioOn");
Object.defineProperty(exports, "RadioOn", { enumerable: true, get: function () { return RadioOn_1.RadioOn; } });
const RadioHandheld_1 = require("./components/RadioHandheld");
Object.defineProperty(exports, "RadioHandheld", { enumerable: true, get: function () { return RadioHandheld_1.RadioHandheld; } });
const Print_1 = require("./components/Print");
Object.defineProperty(exports, "Print", { enumerable: true, get: function () { return Print_1.Print; } });
const Prev_1 = require("./components/Prev");
Object.defineProperty(exports, "Prev", { enumerable: true, get: function () { return Prev_1.Prev; } });
const Power_1 = require("./components/Power");
Object.defineProperty(exports, "Power", { enumerable: true, get: function () { return Power_1.Power; } });
const Plus_1 = require("./components/Plus");
Object.defineProperty(exports, "Plus", { enumerable: true, get: function () { return Plus_1.Plus; } });
const Playlist_1 = require("./components/Playlist");
Object.defineProperty(exports, "Playlist", { enumerable: true, get: function () { return Playlist_1.Playlist; } });
const Play_1 = require("./components/Play");
Object.defineProperty(exports, "Play", { enumerable: true, get: function () { return Play_1.Play; } });
const Pixelarticons_1 = require("./components/Pixelarticons");
Object.defineProperty(exports, "Pixelarticons", { enumerable: true, get: function () { return Pixelarticons_1.Pixelarticons; } });
const Pin_1 = require("./components/Pin");
Object.defineProperty(exports, "Pin", { enumerable: true, get: function () { return Pin_1.Pin; } });
const PictureInPicture_1 = require("./components/PictureInPicture");
Object.defineProperty(exports, "PictureInPicture", { enumerable: true, get: function () { return PictureInPicture_1.PictureInPicture; } });
const PictureInPictureAlt_1 = require("./components/PictureInPictureAlt");
Object.defineProperty(exports, "PictureInPictureAlt", { enumerable: true, get: function () { return PictureInPictureAlt_1.PictureInPictureAlt; } });
const Percent_1 = require("./components/Percent");
Object.defineProperty(exports, "Percent", { enumerable: true, get: function () { return Percent_1.Percent; } });
const Pause_1 = require("./components/Pause");
Object.defineProperty(exports, "Pause", { enumerable: true, get: function () { return Pause_1.Pause; } });
const Paperclip_1 = require("./components/Paperclip");
Object.defineProperty(exports, "Paperclip", { enumerable: true, get: function () { return Paperclip_1.Paperclip; } });
const PaintBucket_1 = require("./components/PaintBucket");
Object.defineProperty(exports, "PaintBucket", { enumerable: true, get: function () { return PaintBucket_1.PaintBucket; } });
const Open_1 = require("./components/Open");
Object.defineProperty(exports, "Open", { enumerable: true, get: function () { return Open_1.Open; } });
const Notification_1 = require("./components/Notification");
Object.defineProperty(exports, "Notification", { enumerable: true, get: function () { return Notification_1.Notification; } });
const NotificationOff_1 = require("./components/NotificationOff");
Object.defineProperty(exports, "NotificationOff", { enumerable: true, get: function () { return NotificationOff_1.NotificationOff; } });
const Notes_1 = require("./components/Notes");
Object.defineProperty(exports, "Notes", { enumerable: true, get: function () { return Notes_1.Notes; } });
const NotesPlus_1 = require("./components/NotesPlus");
Object.defineProperty(exports, "NotesPlus", { enumerable: true, get: function () { return NotesPlus_1.NotesPlus; } });
const NotesMultiple_1 = require("./components/NotesMultiple");
Object.defineProperty(exports, "NotesMultiple", { enumerable: true, get: function () { return NotesMultiple_1.NotesMultiple; } });
const NotesDelete_1 = require("./components/NotesDelete");
Object.defineProperty(exports, "NotesDelete", { enumerable: true, get: function () { return NotesDelete_1.NotesDelete; } });
const Note_1 = require("./components/Note");
Object.defineProperty(exports, "Note", { enumerable: true, get: function () { return Note_1.Note; } });
const NotePlus_1 = require("./components/NotePlus");
Object.defineProperty(exports, "NotePlus", { enumerable: true, get: function () { return NotePlus_1.NotePlus; } });
const NoteMultiple_1 = require("./components/NoteMultiple");
Object.defineProperty(exports, "NoteMultiple", { enumerable: true, get: function () { return NoteMultiple_1.NoteMultiple; } });
const NoteDelete_1 = require("./components/NoteDelete");
Object.defineProperty(exports, "NoteDelete", { enumerable: true, get: function () { return NoteDelete_1.NoteDelete; } });
const Next_1 = require("./components/Next");
Object.defineProperty(exports, "Next", { enumerable: true, get: function () { return Next_1.Next; } });
const Music_1 = require("./components/Music");
Object.defineProperty(exports, "Music", { enumerable: true, get: function () { return Music_1.Music; } });
const Movie_1 = require("./components/Movie");
Object.defineProperty(exports, "Movie", { enumerable: true, get: function () { return Movie_1.Movie; } });
const Move_1 = require("./components/Move");
Object.defineProperty(exports, "Move", { enumerable: true, get: function () { return Move_1.Move; } });
const Mouse_1 = require("./components/Mouse");
Object.defineProperty(exports, "Mouse", { enumerable: true, get: function () { return Mouse_1.Mouse; } });
const MoreVertical_1 = require("./components/MoreVertical");
Object.defineProperty(exports, "MoreVertical", { enumerable: true, get: function () { return MoreVertical_1.MoreVertical; } });
const MoreHorizontal_1 = require("./components/MoreHorizontal");
Object.defineProperty(exports, "MoreHorizontal", { enumerable: true, get: function () { return MoreHorizontal_1.MoreHorizontal; } });
const Moon_1 = require("./components/Moon");
Object.defineProperty(exports, "Moon", { enumerable: true, get: function () { return Moon_1.Moon; } });
const MoonStars_1 = require("./components/MoonStars");
Object.defineProperty(exports, "MoonStars", { enumerable: true, get: function () { return MoonStars_1.MoonStars; } });
const MoonStar_1 = require("./components/MoonStar");
Object.defineProperty(exports, "MoonStar", { enumerable: true, get: function () { return MoonStar_1.MoonStar; } });
const MoodSad_1 = require("./components/MoodSad");
Object.defineProperty(exports, "MoodSad", { enumerable: true, get: function () { return MoodSad_1.MoodSad; } });
const MoodNeutral_1 = require("./components/MoodNeutral");
Object.defineProperty(exports, "MoodNeutral", { enumerable: true, get: function () { return MoodNeutral_1.MoodNeutral; } });
const MoodHappy_1 = require("./components/MoodHappy");
Object.defineProperty(exports, "MoodHappy", { enumerable: true, get: function () { return MoodHappy_1.MoodHappy; } });
const Monitor_1 = require("./components/Monitor");
Object.defineProperty(exports, "Monitor", { enumerable: true, get: function () { return Monitor_1.Monitor; } });
const Money_1 = require("./components/Money");
Object.defineProperty(exports, "Money", { enumerable: true, get: function () { return Money_1.Money; } });
const Modem_1 = require("./components/Modem");
Object.defineProperty(exports, "Modem", { enumerable: true, get: function () { return Modem_1.Modem; } });
const MissedCall_1 = require("./components/MissedCall");
Object.defineProperty(exports, "MissedCall", { enumerable: true, get: function () { return MissedCall_1.MissedCall; } });
const Minus_1 = require("./components/Minus");
Object.defineProperty(exports, "Minus", { enumerable: true, get: function () { return Minus_1.Minus; } });
const Message_1 = require("./components/Message");
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return Message_1.Message; } });
const MessageText_1 = require("./components/MessageText");
Object.defineProperty(exports, "MessageText", { enumerable: true, get: function () { return MessageText_1.MessageText; } });
const MessageReply_1 = require("./components/MessageReply");
Object.defineProperty(exports, "MessageReply", { enumerable: true, get: function () { return MessageReply_1.MessageReply; } });
const MessageProcessing_1 = require("./components/MessageProcessing");
Object.defineProperty(exports, "MessageProcessing", { enumerable: true, get: function () { return MessageProcessing_1.MessageProcessing; } });
const MessagePlus_1 = require("./components/MessagePlus");
Object.defineProperty(exports, "MessagePlus", { enumerable: true, get: function () { return MessagePlus_1.MessagePlus; } });
const MessageMinus_1 = require("./components/MessageMinus");
Object.defineProperty(exports, "MessageMinus", { enumerable: true, get: function () { return MessageMinus_1.MessageMinus; } });
const MessageImage_1 = require("./components/MessageImage");
Object.defineProperty(exports, "MessageImage", { enumerable: true, get: function () { return MessageImage_1.MessageImage; } });
const MessageFlash_1 = require("./components/MessageFlash");
Object.defineProperty(exports, "MessageFlash", { enumerable: true, get: function () { return MessageFlash_1.MessageFlash; } });
const MessageDelete_1 = require("./components/MessageDelete");
Object.defineProperty(exports, "MessageDelete", { enumerable: true, get: function () { return MessageDelete_1.MessageDelete; } });
const MessageClock_1 = require("./components/MessageClock");
Object.defineProperty(exports, "MessageClock", { enumerable: true, get: function () { return MessageClock_1.MessageClock; } });
const MessageBookmark_1 = require("./components/MessageBookmark");
Object.defineProperty(exports, "MessageBookmark", { enumerable: true, get: function () { return MessageBookmark_1.MessageBookmark; } });
const MessageArrowRight_1 = require("./components/MessageArrowRight");
Object.defineProperty(exports, "MessageArrowRight", { enumerable: true, get: function () { return MessageArrowRight_1.MessageArrowRight; } });
const MessageArrowLeft_1 = require("./components/MessageArrowLeft");
Object.defineProperty(exports, "MessageArrowLeft", { enumerable: true, get: function () { return MessageArrowLeft_1.MessageArrowLeft; } });
const Menu_1 = require("./components/Menu");
Object.defineProperty(exports, "Menu", { enumerable: true, get: function () { return Menu_1.Menu; } });
const Membercard_1 = require("./components/Membercard");
Object.defineProperty(exports, "Membercard", { enumerable: true, get: function () { return Membercard_1.Membercard; } });
const Mastodon_1 = require("./components/Mastodon");
Object.defineProperty(exports, "Mastodon", { enumerable: true, get: function () { return Mastodon_1.Mastodon; } });
const Map_1 = require("./components/Map");
Object.defineProperty(exports, "Map", { enumerable: true, get: function () { return Map_1.Map; } });
const Mail_1 = require("./components/Mail");
Object.defineProperty(exports, "Mail", { enumerable: true, get: function () { return Mail_1.Mail; } });
const MailUnread_1 = require("./components/MailUnread");
Object.defineProperty(exports, "MailUnread", { enumerable: true, get: function () { return MailUnread_1.MailUnread; } });
const MailOff_1 = require("./components/MailOff");
Object.defineProperty(exports, "MailOff", { enumerable: true, get: function () { return MailOff_1.MailOff; } });
const MailMultiple_1 = require("./components/MailMultiple");
Object.defineProperty(exports, "MailMultiple", { enumerable: true, get: function () { return MailMultiple_1.MailMultiple; } });
const MailFlash_1 = require("./components/MailFlash");
Object.defineProperty(exports, "MailFlash", { enumerable: true, get: function () { return MailFlash_1.MailFlash; } });
const MailDelete_1 = require("./components/MailDelete");
Object.defineProperty(exports, "MailDelete", { enumerable: true, get: function () { return MailDelete_1.MailDelete; } });
const MailCheck_1 = require("./components/MailCheck");
Object.defineProperty(exports, "MailCheck", { enumerable: true, get: function () { return MailCheck_1.MailCheck; } });
const MailArrowRight_1 = require("./components/MailArrowRight");
Object.defineProperty(exports, "MailArrowRight", { enumerable: true, get: function () { return MailArrowRight_1.MailArrowRight; } });
const Luggage_1 = require("./components/Luggage");
Object.defineProperty(exports, "Luggage", { enumerable: true, get: function () { return Luggage_1.Luggage; } });
const Logout_1 = require("./components/Logout");
Object.defineProperty(exports, "Logout", { enumerable: true, get: function () { return Logout_1.Logout; } });
const Login_1 = require("./components/Login");
Object.defineProperty(exports, "Login", { enumerable: true, get: function () { return Login_1.Login; } });
const Lock_1 = require("./components/Lock");
Object.defineProperty(exports, "Lock", { enumerable: true, get: function () { return Lock_1.Lock; } });
const LockOpen_1 = require("./components/LockOpen");
Object.defineProperty(exports, "LockOpen", { enumerable: true, get: function () { return LockOpen_1.LockOpen; } });
const Loader_1 = require("./components/Loader");
Object.defineProperty(exports, "Loader", { enumerable: true, get: function () { return Loader_1.Loader; } });
const List_1 = require("./components/List");
Object.defineProperty(exports, "List", { enumerable: true, get: function () { return List_1.List; } });
const ListBox_1 = require("./components/ListBox");
Object.defineProperty(exports, "ListBox", { enumerable: true, get: function () { return ListBox_1.ListBox; } });
const Link_1 = require("./components/Link");
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return Link_1.Link; } });
const Lightbulb_1 = require("./components/Lightbulb");
Object.defineProperty(exports, "Lightbulb", { enumerable: true, get: function () { return Lightbulb_1.Lightbulb; } });
const LightbulbOn_1 = require("./components/LightbulbOn");
Object.defineProperty(exports, "LightbulbOn", { enumerable: true, get: function () { return LightbulbOn_1.LightbulbOn; } });
const Lightbulb2_1 = require("./components/Lightbulb2");
Object.defineProperty(exports, "Lightbulb2", { enumerable: true, get: function () { return Lightbulb2_1.Lightbulb2; } });
const Layout_1 = require("./components/Layout");
Object.defineProperty(exports, "Layout", { enumerable: true, get: function () { return Layout_1.Layout; } });
const LayoutSidebarRight_1 = require("./components/LayoutSidebarRight");
Object.defineProperty(exports, "LayoutSidebarRight", { enumerable: true, get: function () { return LayoutSidebarRight_1.LayoutSidebarRight; } });
const LayoutSidebarLeft_1 = require("./components/LayoutSidebarLeft");
Object.defineProperty(exports, "LayoutSidebarLeft", { enumerable: true, get: function () { return LayoutSidebarLeft_1.LayoutSidebarLeft; } });
const LayoutRows_1 = require("./components/LayoutRows");
Object.defineProperty(exports, "LayoutRows", { enumerable: true, get: function () { return LayoutRows_1.LayoutRows; } });
const LayoutHeader_1 = require("./components/LayoutHeader");
Object.defineProperty(exports, "LayoutHeader", { enumerable: true, get: function () { return LayoutHeader_1.LayoutHeader; } });
const LayoutFooter_1 = require("./components/LayoutFooter");
Object.defineProperty(exports, "LayoutFooter", { enumerable: true, get: function () { return LayoutFooter_1.LayoutFooter; } });
const LayoutDistributeVertical_1 = require("./components/LayoutDistributeVertical");
Object.defineProperty(exports, "LayoutDistributeVertical", { enumerable: true, get: function () { return LayoutDistributeVertical_1.LayoutDistributeVertical; } });
const LayoutDistributeHorizontal_1 = require("./components/LayoutDistributeHorizontal");
Object.defineProperty(exports, "LayoutDistributeHorizontal", { enumerable: true, get: function () { return LayoutDistributeHorizontal_1.LayoutDistributeHorizontal; } });
const LayoutColumns_1 = require("./components/LayoutColumns");
Object.defineProperty(exports, "LayoutColumns", { enumerable: true, get: function () { return LayoutColumns_1.LayoutColumns; } });
const LayoutAlignTop_1 = require("./components/LayoutAlignTop");
Object.defineProperty(exports, "LayoutAlignTop", { enumerable: true, get: function () { return LayoutAlignTop_1.LayoutAlignTop; } });
const LayoutAlignRight_1 = require("./components/LayoutAlignRight");
Object.defineProperty(exports, "LayoutAlignRight", { enumerable: true, get: function () { return LayoutAlignRight_1.LayoutAlignRight; } });
const LayoutAlignLeft_1 = require("./components/LayoutAlignLeft");
Object.defineProperty(exports, "LayoutAlignLeft", { enumerable: true, get: function () { return LayoutAlignLeft_1.LayoutAlignLeft; } });
const LayoutAlignBottom_1 = require("./components/LayoutAlignBottom");
Object.defineProperty(exports, "LayoutAlignBottom", { enumerable: true, get: function () { return LayoutAlignBottom_1.LayoutAlignBottom; } });
const Label_1 = require("./components/Label");
Object.defineProperty(exports, "Label", { enumerable: true, get: function () { return Label_1.Label; } });
const LabelSharp_1 = require("./components/LabelSharp");
Object.defineProperty(exports, "LabelSharp", { enumerable: true, get: function () { return LabelSharp_1.LabelSharp; } });
const LabelAlt_1 = require("./components/LabelAlt");
Object.defineProperty(exports, "LabelAlt", { enumerable: true, get: function () { return LabelAlt_1.LabelAlt; } });
const LabelAltMultiple_1 = require("./components/LabelAltMultiple");
Object.defineProperty(exports, "LabelAltMultiple", { enumerable: true, get: function () { return LabelAltMultiple_1.LabelAltMultiple; } });
const Keyboard_1 = require("./components/Keyboard");
Object.defineProperty(exports, "Keyboard", { enumerable: true, get: function () { return Keyboard_1.Keyboard; } });
const Kanban_1 = require("./components/Kanban");
Object.defineProperty(exports, "Kanban", { enumerable: true, get: function () { return Kanban_1.Kanban; } });
const Iso_1 = require("./components/Iso");
Object.defineProperty(exports, "Iso", { enumerable: true, get: function () { return Iso_1.Iso; } });
const Invert_1 = require("./components/Invert");
Object.defineProperty(exports, "Invert", { enumerable: true, get: function () { return Invert_1.Invert; } });
const InfoBox_1 = require("./components/InfoBox");
Object.defineProperty(exports, "InfoBox", { enumerable: true, get: function () { return InfoBox_1.InfoBox; } });
const Inbox_1 = require("./components/Inbox");
Object.defineProperty(exports, "Inbox", { enumerable: true, get: function () { return Inbox_1.Inbox; } });
const InboxFull_1 = require("./components/InboxFull");
Object.defineProperty(exports, "InboxFull", { enumerable: true, get: function () { return InboxFull_1.InboxFull; } });
const InboxAll_1 = require("./components/InboxAll");
Object.defineProperty(exports, "InboxAll", { enumerable: true, get: function () { return InboxAll_1.InboxAll; } });
const Image_1 = require("./components/Image");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return Image_1.Image; } });
const ImagePlus_1 = require("./components/ImagePlus");
Object.defineProperty(exports, "ImagePlus", { enumerable: true, get: function () { return ImagePlus_1.ImagePlus; } });
const ImageNew_1 = require("./components/ImageNew");
Object.defineProperty(exports, "ImageNew", { enumerable: true, get: function () { return ImageNew_1.ImageNew; } });
const ImageMultiple_1 = require("./components/ImageMultiple");
Object.defineProperty(exports, "ImageMultiple", { enumerable: true, get: function () { return ImageMultiple_1.ImageMultiple; } });
const ImageGallery_1 = require("./components/ImageGallery");
Object.defineProperty(exports, "ImageGallery", { enumerable: true, get: function () { return ImageGallery_1.ImageGallery; } });
const ImageFrame_1 = require("./components/ImageFrame");
Object.defineProperty(exports, "ImageFrame", { enumerable: true, get: function () { return ImageFrame_1.ImageFrame; } });
const ImageFlash_1 = require("./components/ImageFlash");
Object.defineProperty(exports, "ImageFlash", { enumerable: true, get: function () { return ImageFlash_1.ImageFlash; } });
const ImageDelete_1 = require("./components/ImageDelete");
Object.defineProperty(exports, "ImageDelete", { enumerable: true, get: function () { return ImageDelete_1.ImageDelete; } });
const ImageBroken_1 = require("./components/ImageBroken");
Object.defineProperty(exports, "ImageBroken", { enumerable: true, get: function () { return ImageBroken_1.ImageBroken; } });
const ImageArrowRight_1 = require("./components/ImageArrowRight");
Object.defineProperty(exports, "ImageArrowRight", { enumerable: true, get: function () { return ImageArrowRight_1.ImageArrowRight; } });
const Human_1 = require("./components/Human");
Object.defineProperty(exports, "Human", { enumerable: true, get: function () { return Human_1.Human; } });
const HumanRun_1 = require("./components/HumanRun");
Object.defineProperty(exports, "HumanRun", { enumerable: true, get: function () { return HumanRun_1.HumanRun; } });
const HumanHeight_1 = require("./components/HumanHeight");
Object.defineProperty(exports, "HumanHeight", { enumerable: true, get: function () { return HumanHeight_1.HumanHeight; } });
const HumanHeightAlt_1 = require("./components/HumanHeightAlt");
Object.defineProperty(exports, "HumanHeightAlt", { enumerable: true, get: function () { return HumanHeightAlt_1.HumanHeightAlt; } });
const HumanHandsup_1 = require("./components/HumanHandsup");
Object.defineProperty(exports, "HumanHandsup", { enumerable: true, get: function () { return HumanHandsup_1.HumanHandsup; } });
const HumanHandsdown_1 = require("./components/HumanHandsdown");
Object.defineProperty(exports, "HumanHandsdown", { enumerable: true, get: function () { return HumanHandsdown_1.HumanHandsdown; } });
const Hq_1 = require("./components/Hq");
Object.defineProperty(exports, "Hq", { enumerable: true, get: function () { return Hq_1.Hq; } });
const Hourglass_1 = require("./components/Hourglass");
Object.defineProperty(exports, "Hourglass", { enumerable: true, get: function () { return Hourglass_1.Hourglass; } });
const Home_1 = require("./components/Home");
Object.defineProperty(exports, "Home", { enumerable: true, get: function () { return Home_1.Home; } });
const Hidden_1 = require("./components/Hidden");
Object.defineProperty(exports, "Hidden", { enumerable: true, get: function () { return Hidden_1.Hidden; } });
const Heart_1 = require("./components/Heart");
Object.defineProperty(exports, "Heart", { enumerable: true, get: function () { return Heart_1.Heart; } });
const Headset_1 = require("./components/Headset");
Object.defineProperty(exports, "Headset", { enumerable: true, get: function () { return Headset_1.Headset; } });
const Headphone_1 = require("./components/Headphone");
Object.defineProperty(exports, "Headphone", { enumerable: true, get: function () { return Headphone_1.Headphone; } });
const Hd_1 = require("./components/Hd");
Object.defineProperty(exports, "Hd", { enumerable: true, get: function () { return Hd_1.Hd; } });
const Group_1 = require("./components/Group");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return Group_1.Group; } });
const Grid_1 = require("./components/Grid");
Object.defineProperty(exports, "Grid", { enumerable: true, get: function () { return Grid_1.Grid; } });
const Gps_1 = require("./components/Gps");
Object.defineProperty(exports, "Gps", { enumerable: true, get: function () { return Gps_1.Gps; } });
const Github_1 = require("./components/Github");
Object.defineProperty(exports, "Github", { enumerable: true, get: function () { return Github_1.Github; } });
const Github2_1 = require("./components/Github2");
Object.defineProperty(exports, "Github2", { enumerable: true, get: function () { return Github2_1.Github2; } });
const GitPullRequest_1 = require("./components/GitPullRequest");
Object.defineProperty(exports, "GitPullRequest", { enumerable: true, get: function () { return GitPullRequest_1.GitPullRequest; } });
const GitMerge_1 = require("./components/GitMerge");
Object.defineProperty(exports, "GitMerge", { enumerable: true, get: function () { return GitMerge_1.GitMerge; } });
const GitCommit_1 = require("./components/GitCommit");
Object.defineProperty(exports, "GitCommit", { enumerable: true, get: function () { return GitCommit_1.GitCommit; } });
const GitBranch_1 = require("./components/GitBranch");
Object.defineProperty(exports, "GitBranch", { enumerable: true, get: function () { return GitBranch_1.GitBranch; } });
const Gift_1 = require("./components/Gift");
Object.defineProperty(exports, "Gift", { enumerable: true, get: function () { return Gift_1.Gift; } });
const Gif_1 = require("./components/Gif");
Object.defineProperty(exports, "Gif", { enumerable: true, get: function () { return Gif_1.Gif; } });
const Gamepad_1 = require("./components/Gamepad");
Object.defineProperty(exports, "Gamepad", { enumerable: true, get: function () { return Gamepad_1.Gamepad; } });
const Frame_1 = require("./components/Frame");
Object.defineProperty(exports, "Frame", { enumerable: true, get: function () { return Frame_1.Frame; } });
const FrameMinus_1 = require("./components/FrameMinus");
Object.defineProperty(exports, "FrameMinus", { enumerable: true, get: function () { return FrameMinus_1.FrameMinus; } });
const FrameDelete_1 = require("./components/FrameDelete");
Object.defineProperty(exports, "FrameDelete", { enumerable: true, get: function () { return FrameDelete_1.FrameDelete; } });
const FrameCheck_1 = require("./components/FrameCheck");
Object.defineProperty(exports, "FrameCheck", { enumerable: true, get: function () { return FrameCheck_1.FrameCheck; } });
const FrameAdd_1 = require("./components/FrameAdd");
Object.defineProperty(exports, "FrameAdd", { enumerable: true, get: function () { return FrameAdd_1.FrameAdd; } });
const Forwardburger_1 = require("./components/Forwardburger");
Object.defineProperty(exports, "Forwardburger", { enumerable: true, get: function () { return Forwardburger_1.Forwardburger; } });
const Forward_1 = require("./components/Forward");
Object.defineProperty(exports, "Forward", { enumerable: true, get: function () { return Forward_1.Forward; } });
const Folder_1 = require("./components/Folder");
Object.defineProperty(exports, "Folder", { enumerable: true, get: function () { return Folder_1.Folder; } });
const FolderX_1 = require("./components/FolderX");
Object.defineProperty(exports, "FolderX", { enumerable: true, get: function () { return FolderX_1.FolderX; } });
const FolderPlus_1 = require("./components/FolderPlus");
Object.defineProperty(exports, "FolderPlus", { enumerable: true, get: function () { return FolderPlus_1.FolderPlus; } });
const FolderMinus_1 = require("./components/FolderMinus");
Object.defineProperty(exports, "FolderMinus", { enumerable: true, get: function () { return FolderMinus_1.FolderMinus; } });
const FloatRight_1 = require("./components/FloatRight");
Object.defineProperty(exports, "FloatRight", { enumerable: true, get: function () { return FloatRight_1.FloatRight; } });
const FloatLeft_1 = require("./components/FloatLeft");
Object.defineProperty(exports, "FloatLeft", { enumerable: true, get: function () { return FloatLeft_1.FloatLeft; } });
const FloatCenter_1 = require("./components/FloatCenter");
Object.defineProperty(exports, "FloatCenter", { enumerable: true, get: function () { return FloatCenter_1.FloatCenter; } });
const FlipToFront_1 = require("./components/FlipToFront");
Object.defineProperty(exports, "FlipToFront", { enumerable: true, get: function () { return FlipToFront_1.FlipToFront; } });
const FlipToBack_1 = require("./components/FlipToBack");
Object.defineProperty(exports, "FlipToBack", { enumerable: true, get: function () { return FlipToBack_1.FlipToBack; } });
const Flatten_1 = require("./components/Flatten");
Object.defineProperty(exports, "Flatten", { enumerable: true, get: function () { return Flatten_1.Flatten; } });
const Flag_1 = require("./components/Flag");
Object.defineProperty(exports, "Flag", { enumerable: true, get: function () { return Flag_1.Flag; } });
const Fill_1 = require("./components/Fill");
Object.defineProperty(exports, "Fill", { enumerable: true, get: function () { return Fill_1.Fill; } });
const FillHalf_1 = require("./components/FillHalf");
Object.defineProperty(exports, "FillHalf", { enumerable: true, get: function () { return FillHalf_1.FillHalf; } });
const File_1 = require("./components/File");
Object.defineProperty(exports, "File", { enumerable: true, get: function () { return File_1.File; } });
const FilePlus_1 = require("./components/FilePlus");
Object.defineProperty(exports, "FilePlus", { enumerable: true, get: function () { return FilePlus_1.FilePlus; } });
const FileOff_1 = require("./components/FileOff");
Object.defineProperty(exports, "FileOff", { enumerable: true, get: function () { return FileOff_1.FileOff; } });
const FileMultiple_1 = require("./components/FileMultiple");
Object.defineProperty(exports, "FileMultiple", { enumerable: true, get: function () { return FileMultiple_1.FileMultiple; } });
const FileMinus_1 = require("./components/FileMinus");
Object.defineProperty(exports, "FileMinus", { enumerable: true, get: function () { return FileMinus_1.FileMinus; } });
const FileFlash_1 = require("./components/FileFlash");
Object.defineProperty(exports, "FileFlash", { enumerable: true, get: function () { return FileFlash_1.FileFlash; } });
const FileDelete_1 = require("./components/FileDelete");
Object.defineProperty(exports, "FileDelete", { enumerable: true, get: function () { return FileDelete_1.FileDelete; } });
const FileAlt_1 = require("./components/FileAlt");
Object.defineProperty(exports, "FileAlt", { enumerable: true, get: function () { return FileAlt_1.FileAlt; } });
const Eye_1 = require("./components/Eye");
Object.defineProperty(exports, "Eye", { enumerable: true, get: function () { return Eye_1.Eye; } });
const EyeClosed_1 = require("./components/EyeClosed");
Object.defineProperty(exports, "EyeClosed", { enumerable: true, get: function () { return EyeClosed_1.EyeClosed; } });
const ExternalLink_1 = require("./components/ExternalLink");
Object.defineProperty(exports, "ExternalLink", { enumerable: true, get: function () { return ExternalLink_1.ExternalLink; } });
const Expand_1 = require("./components/Expand");
Object.defineProperty(exports, "Expand", { enumerable: true, get: function () { return Expand_1.Expand; } });
const Euro_1 = require("./components/Euro");
Object.defineProperty(exports, "Euro", { enumerable: true, get: function () { return Euro_1.Euro; } });
const Edit_1 = require("./components/Edit");
Object.defineProperty(exports, "Edit", { enumerable: true, get: function () { return Edit_1.Edit; } });
const EditBox_1 = require("./components/EditBox");
Object.defineProperty(exports, "EditBox", { enumerable: true, get: function () { return EditBox_1.EditBox; } });
const Duplicate_1 = require("./components/Duplicate");
Object.defineProperty(exports, "Duplicate", { enumerable: true, get: function () { return Duplicate_1.Duplicate; } });
const DuplicateAlt_1 = require("./components/DuplicateAlt");
Object.defineProperty(exports, "DuplicateAlt", { enumerable: true, get: function () { return DuplicateAlt_1.DuplicateAlt; } });
const Drop_1 = require("./components/Drop");
Object.defineProperty(exports, "Drop", { enumerable: true, get: function () { return Drop_1.Drop; } });
const DropHalf_1 = require("./components/DropHalf");
Object.defineProperty(exports, "DropHalf", { enumerable: true, get: function () { return DropHalf_1.DropHalf; } });
const DropFull_1 = require("./components/DropFull");
Object.defineProperty(exports, "DropFull", { enumerable: true, get: function () { return DropFull_1.DropFull; } });
const DropArea_1 = require("./components/DropArea");
Object.defineProperty(exports, "DropArea", { enumerable: true, get: function () { return DropArea_1.DropArea; } });
const DragAndDrop_1 = require("./components/DragAndDrop");
Object.defineProperty(exports, "DragAndDrop", { enumerable: true, get: function () { return DragAndDrop_1.DragAndDrop; } });
const Draft_1 = require("./components/Draft");
Object.defineProperty(exports, "Draft", { enumerable: true, get: function () { return Draft_1.Draft; } });
const Download_1 = require("./components/Download");
Object.defineProperty(exports, "Download", { enumerable: true, get: function () { return Download_1.Download; } });
const Downasaur_1 = require("./components/Downasaur");
Object.defineProperty(exports, "Downasaur", { enumerable: true, get: function () { return Downasaur_1.Downasaur; } });
const Dollar_1 = require("./components/Dollar");
Object.defineProperty(exports, "Dollar", { enumerable: true, get: function () { return Dollar_1.Dollar; } });
const Dice_1 = require("./components/Dice");
Object.defineProperty(exports, "Dice", { enumerable: true, get: function () { return Dice_1.Dice; } });
const Devices_1 = require("./components/Devices");
Object.defineProperty(exports, "Devices", { enumerable: true, get: function () { return Devices_1.Devices; } });
const DeviceWatch_1 = require("./components/DeviceWatch");
Object.defineProperty(exports, "DeviceWatch", { enumerable: true, get: function () { return DeviceWatch_1.DeviceWatch; } });
const DeviceVibrate_1 = require("./components/DeviceVibrate");
Object.defineProperty(exports, "DeviceVibrate", { enumerable: true, get: function () { return DeviceVibrate_1.DeviceVibrate; } });
const DeviceTv_1 = require("./components/DeviceTv");
Object.defineProperty(exports, "DeviceTv", { enumerable: true, get: function () { return DeviceTv_1.DeviceTv; } });
const DeviceTvSmart_1 = require("./components/DeviceTvSmart");
Object.defineProperty(exports, "DeviceTvSmart", { enumerable: true, get: function () { return DeviceTvSmart_1.DeviceTvSmart; } });
const DeviceTablet_1 = require("./components/DeviceTablet");
Object.defineProperty(exports, "DeviceTablet", { enumerable: true, get: function () { return DeviceTablet_1.DeviceTablet; } });
const DevicePhone_1 = require("./components/DevicePhone");
Object.defineProperty(exports, "DevicePhone", { enumerable: true, get: function () { return DevicePhone_1.DevicePhone; } });
const DeviceLaptop_1 = require("./components/DeviceLaptop");
Object.defineProperty(exports, "DeviceLaptop", { enumerable: true, get: function () { return DeviceLaptop_1.DeviceLaptop; } });
const Deskphone_1 = require("./components/Deskphone");
Object.defineProperty(exports, "Deskphone", { enumerable: true, get: function () { return Deskphone_1.Deskphone; } });
const Delete_1 = require("./components/Delete");
Object.defineProperty(exports, "Delete", { enumerable: true, get: function () { return Delete_1.Delete; } });
const Debug_1 = require("./components/Debug");
Object.defineProperty(exports, "Debug", { enumerable: true, get: function () { return Debug_1.Debug; } });
const DebugStop_1 = require("./components/DebugStop");
Object.defineProperty(exports, "DebugStop", { enumerable: true, get: function () { return DebugStop_1.DebugStop; } });
const DebugPlay_1 = require("./components/DebugPlay");
Object.defineProperty(exports, "DebugPlay", { enumerable: true, get: function () { return DebugPlay_1.DebugPlay; } });
const DebugPause_1 = require("./components/DebugPause");
Object.defineProperty(exports, "DebugPause", { enumerable: true, get: function () { return DebugPause_1.DebugPause; } });
const DebugOff_1 = require("./components/DebugOff");
Object.defineProperty(exports, "DebugOff", { enumerable: true, get: function () { return DebugOff_1.DebugOff; } });
const DebugCheck_1 = require("./components/DebugCheck");
Object.defineProperty(exports, "DebugCheck", { enumerable: true, get: function () { return DebugCheck_1.DebugCheck; } });
const Dashboard_1 = require("./components/Dashboard");
Object.defineProperty(exports, "Dashboard", { enumerable: true, get: function () { return Dashboard_1.Dashboard; } });
const Cut_1 = require("./components/Cut");
Object.defineProperty(exports, "Cut", { enumerable: true, get: function () { return Cut_1.Cut; } });
const Crop_1 = require("./components/Crop");
Object.defineProperty(exports, "Crop", { enumerable: true, get: function () { return Crop_1.Crop; } });
const CreditCard_1 = require("./components/CreditCard");
Object.defineProperty(exports, "CreditCard", { enumerable: true, get: function () { return CreditCard_1.CreditCard; } });
const CreditCardWireless_1 = require("./components/CreditCardWireless");
Object.defineProperty(exports, "CreditCardWireless", { enumerable: true, get: function () { return CreditCardWireless_1.CreditCardWireless; } });
const CreditCardSettings_1 = require("./components/CreditCardSettings");
Object.defineProperty(exports, "CreditCardSettings", { enumerable: true, get: function () { return CreditCardSettings_1.CreditCardSettings; } });
const CreditCardPlus_1 = require("./components/CreditCardPlus");
Object.defineProperty(exports, "CreditCardPlus", { enumerable: true, get: function () { return CreditCardPlus_1.CreditCardPlus; } });
const CreditCardMultiple_1 = require("./components/CreditCardMultiple");
Object.defineProperty(exports, "CreditCardMultiple", { enumerable: true, get: function () { return CreditCardMultiple_1.CreditCardMultiple; } });
const CreditCardMinus_1 = require("./components/CreditCardMinus");
Object.defineProperty(exports, "CreditCardMinus", { enumerable: true, get: function () { return CreditCardMinus_1.CreditCardMinus; } });
const CreditCardDelete_1 = require("./components/CreditCardDelete");
Object.defineProperty(exports, "CreditCardDelete", { enumerable: true, get: function () { return CreditCardDelete_1.CreditCardDelete; } });
const CornerUpRight_1 = require("./components/CornerUpRight");
Object.defineProperty(exports, "CornerUpRight", { enumerable: true, get: function () { return CornerUpRight_1.CornerUpRight; } });
const CornerUpLeft_1 = require("./components/CornerUpLeft");
Object.defineProperty(exports, "CornerUpLeft", { enumerable: true, get: function () { return CornerUpLeft_1.CornerUpLeft; } });
const CornerRightUp_1 = require("./components/CornerRightUp");
Object.defineProperty(exports, "CornerRightUp", { enumerable: true, get: function () { return CornerRightUp_1.CornerRightUp; } });
const CornerRightDown_1 = require("./components/CornerRightDown");
Object.defineProperty(exports, "CornerRightDown", { enumerable: true, get: function () { return CornerRightDown_1.CornerRightDown; } });
const CornerLeftUp_1 = require("./components/CornerLeftUp");
Object.defineProperty(exports, "CornerLeftUp", { enumerable: true, get: function () { return CornerLeftUp_1.CornerLeftUp; } });
const CornerLeftDown_1 = require("./components/CornerLeftDown");
Object.defineProperty(exports, "CornerLeftDown", { enumerable: true, get: function () { return CornerLeftDown_1.CornerLeftDown; } });
const CornerDownRight_1 = require("./components/CornerDownRight");
Object.defineProperty(exports, "CornerDownRight", { enumerable: true, get: function () { return CornerDownRight_1.CornerDownRight; } });
const CornerDownLeft_1 = require("./components/CornerDownLeft");
Object.defineProperty(exports, "CornerDownLeft", { enumerable: true, get: function () { return CornerDownLeft_1.CornerDownLeft; } });
const Copy_1 = require("./components/Copy");
Object.defineProperty(exports, "Copy", { enumerable: true, get: function () { return Copy_1.Copy; } });
const Contact_1 = require("./components/Contact");
Object.defineProperty(exports, "Contact", { enumerable: true, get: function () { return Contact_1.Contact; } });
const ContactPlus_1 = require("./components/ContactPlus");
Object.defineProperty(exports, "ContactPlus", { enumerable: true, get: function () { return ContactPlus_1.ContactPlus; } });
const ContactMultiple_1 = require("./components/ContactMultiple");
Object.defineProperty(exports, "ContactMultiple", { enumerable: true, get: function () { return ContactMultiple_1.ContactMultiple; } });
const ContactDelete_1 = require("./components/ContactDelete");
Object.defineProperty(exports, "ContactDelete", { enumerable: true, get: function () { return ContactDelete_1.ContactDelete; } });
const Comment_1 = require("./components/Comment");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return Comment_1.Comment; } });
const Command_1 = require("./components/Command");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return Command_1.Command; } });
const ColorsSwatch_1 = require("./components/ColorsSwatch");
Object.defineProperty(exports, "ColorsSwatch", { enumerable: true, get: function () { return ColorsSwatch_1.ColorsSwatch; } });
const Collapse_1 = require("./components/Collapse");
Object.defineProperty(exports, "Collapse", { enumerable: true, get: function () { return Collapse_1.Collapse; } });
const Coin_1 = require("./components/Coin");
Object.defineProperty(exports, "Coin", { enumerable: true, get: function () { return Coin_1.Coin; } });
const Coffee_1 = require("./components/Coffee");
Object.defineProperty(exports, "Coffee", { enumerable: true, get: function () { return Coffee_1.Coffee; } });
const CoffeeAlt_1 = require("./components/CoffeeAlt");
Object.defineProperty(exports, "CoffeeAlt", { enumerable: true, get: function () { return CoffeeAlt_1.CoffeeAlt; } });
const Code_1 = require("./components/Code");
Object.defineProperty(exports, "Code", { enumerable: true, get: function () { return Code_1.Code; } });
const Cocktail_1 = require("./components/Cocktail");
Object.defineProperty(exports, "Cocktail", { enumerable: true, get: function () { return Cocktail_1.Cocktail; } });
const Cloud_1 = require("./components/Cloud");
Object.defineProperty(exports, "Cloud", { enumerable: true, get: function () { return Cloud_1.Cloud; } });
const CloudUpload_1 = require("./components/CloudUpload");
Object.defineProperty(exports, "CloudUpload", { enumerable: true, get: function () { return CloudUpload_1.CloudUpload; } });
const CloudSun_1 = require("./components/CloudSun");
Object.defineProperty(exports, "CloudSun", { enumerable: true, get: function () { return CloudSun_1.CloudSun; } });
const CloudMoon_1 = require("./components/CloudMoon");
Object.defineProperty(exports, "CloudMoon", { enumerable: true, get: function () { return CloudMoon_1.CloudMoon; } });
const CloudDownload_1 = require("./components/CloudDownload");
Object.defineProperty(exports, "CloudDownload", { enumerable: true, get: function () { return CloudDownload_1.CloudDownload; } });
const CloudDone_1 = require("./components/CloudDone");
Object.defineProperty(exports, "CloudDone", { enumerable: true, get: function () { return CloudDone_1.CloudDone; } });
const Close_1 = require("./components/Close");
Object.defineProperty(exports, "Close", { enumerable: true, get: function () { return Close_1.Close; } });
const CloseBox_1 = require("./components/CloseBox");
Object.defineProperty(exports, "CloseBox", { enumerable: true, get: function () { return CloseBox_1.CloseBox; } });
const Clock_1 = require("./components/Clock");
Object.defineProperty(exports, "Clock", { enumerable: true, get: function () { return Clock_1.Clock; } });
const Clipboard_1 = require("./components/Clipboard");
Object.defineProperty(exports, "Clipboard", { enumerable: true, get: function () { return Clipboard_1.Clipboard; } });
const Circle_1 = require("./components/Circle");
Object.defineProperty(exports, "Circle", { enumerable: true, get: function () { return Circle_1.Circle; } });
const ChevronsVertical_1 = require("./components/ChevronsVertical");
Object.defineProperty(exports, "ChevronsVertical", { enumerable: true, get: function () { return ChevronsVertical_1.ChevronsVertical; } });
const ChevronsHorizontal_1 = require("./components/ChevronsHorizontal");
Object.defineProperty(exports, "ChevronsHorizontal", { enumerable: true, get: function () { return ChevronsHorizontal_1.ChevronsHorizontal; } });
const ChevronUp_1 = require("./components/ChevronUp");
Object.defineProperty(exports, "ChevronUp", { enumerable: true, get: function () { return ChevronUp_1.ChevronUp; } });
const ChevronRight_1 = require("./components/ChevronRight");
Object.defineProperty(exports, "ChevronRight", { enumerable: true, get: function () { return ChevronRight_1.ChevronRight; } });
const ChevronLeft_1 = require("./components/ChevronLeft");
Object.defineProperty(exports, "ChevronLeft", { enumerable: true, get: function () { return ChevronLeft_1.ChevronLeft; } });
const ChevronDown_1 = require("./components/ChevronDown");
Object.defineProperty(exports, "ChevronDown", { enumerable: true, get: function () { return ChevronDown_1.ChevronDown; } });
const Chess_1 = require("./components/Chess");
Object.defineProperty(exports, "Chess", { enumerable: true, get: function () { return Chess_1.Chess; } });
const Checklist_1 = require("./components/Checklist");
Object.defineProperty(exports, "Checklist", { enumerable: true, get: function () { return Checklist_1.Checklist; } });
const Checkbox_1 = require("./components/Checkbox");
Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function () { return Checkbox_1.Checkbox; } });
const CheckboxOn_1 = require("./components/CheckboxOn");
Object.defineProperty(exports, "CheckboxOn", { enumerable: true, get: function () { return CheckboxOn_1.CheckboxOn; } });
const Check_1 = require("./components/Check");
Object.defineProperty(exports, "Check", { enumerable: true, get: function () { return Check_1.Check; } });
const CheckDouble_1 = require("./components/CheckDouble");
Object.defineProperty(exports, "CheckDouble", { enumerable: true, get: function () { return CheckDouble_1.CheckDouble; } });
const Chat_1 = require("./components/Chat");
Object.defineProperty(exports, "Chat", { enumerable: true, get: function () { return Chat_1.Chat; } });
const Chart_1 = require("./components/Chart");
Object.defineProperty(exports, "Chart", { enumerable: true, get: function () { return Chart_1.Chart; } });
const ChartMultiple_1 = require("./components/ChartMultiple");
Object.defineProperty(exports, "ChartMultiple", { enumerable: true, get: function () { return ChartMultiple_1.ChartMultiple; } });
const ChartMinus_1 = require("./components/ChartMinus");
Object.defineProperty(exports, "ChartMinus", { enumerable: true, get: function () { return ChartMinus_1.ChartMinus; } });
const ChartDelete_1 = require("./components/ChartDelete");
Object.defineProperty(exports, "ChartDelete", { enumerable: true, get: function () { return ChartDelete_1.ChartDelete; } });
const ChartBar_1 = require("./components/ChartBar");
Object.defineProperty(exports, "ChartBar", { enumerable: true, get: function () { return ChartBar_1.ChartBar; } });
const ChartAdd_1 = require("./components/ChartAdd");
Object.defineProperty(exports, "ChartAdd", { enumerable: true, get: function () { return ChartAdd_1.ChartAdd; } });
const CellularSignalOff_1 = require("./components/CellularSignalOff");
Object.defineProperty(exports, "CellularSignalOff", { enumerable: true, get: function () { return CellularSignalOff_1.CellularSignalOff; } });
const CellularSignal3_1 = require("./components/CellularSignal3");
Object.defineProperty(exports, "CellularSignal3", { enumerable: true, get: function () { return CellularSignal3_1.CellularSignal3; } });
const CellularSignal2_1 = require("./components/CellularSignal2");
Object.defineProperty(exports, "CellularSignal2", { enumerable: true, get: function () { return CellularSignal2_1.CellularSignal2; } });
const CellularSignal1_1 = require("./components/CellularSignal1");
Object.defineProperty(exports, "CellularSignal1", { enumerable: true, get: function () { return CellularSignal1_1.CellularSignal1; } });
const CellularSignal0_1 = require("./components/CellularSignal0");
Object.defineProperty(exports, "CellularSignal0", { enumerable: true, get: function () { return CellularSignal0_1.CellularSignal0; } });
const Cast_1 = require("./components/Cast");
Object.defineProperty(exports, "Cast", { enumerable: true, get: function () { return Cast_1.Cast; } });
const Cart_1 = require("./components/Cart");
Object.defineProperty(exports, "Cart", { enumerable: true, get: function () { return Cart_1.Cart; } });
const Card_1 = require("./components/Card");
Object.defineProperty(exports, "Card", { enumerable: true, get: function () { return Card_1.Card; } });
const CardText_1 = require("./components/CardText");
Object.defineProperty(exports, "CardText", { enumerable: true, get: function () { return CardText_1.CardText; } });
const CardStack_1 = require("./components/CardStack");
Object.defineProperty(exports, "CardStack", { enumerable: true, get: function () { return CardStack_1.CardStack; } });
const CardPlus_1 = require("./components/CardPlus");
Object.defineProperty(exports, "CardPlus", { enumerable: true, get: function () { return CardPlus_1.CardPlus; } });
const CardId_1 = require("./components/CardId");
Object.defineProperty(exports, "CardId", { enumerable: true, get: function () { return CardId_1.CardId; } });
const Car_1 = require("./components/Car");
Object.defineProperty(exports, "Car", { enumerable: true, get: function () { return Car_1.Car; } });
const Camera_1 = require("./components/Camera");
Object.defineProperty(exports, "Camera", { enumerable: true, get: function () { return Camera_1.Camera; } });
const CameraFace_1 = require("./components/CameraFace");
Object.defineProperty(exports, "CameraFace", { enumerable: true, get: function () { return CameraFace_1.CameraFace; } });
const CameraAlt_1 = require("./components/CameraAlt");
Object.defineProperty(exports, "CameraAlt", { enumerable: true, get: function () { return CameraAlt_1.CameraAlt; } });
const CameraAdd_1 = require("./components/CameraAdd");
Object.defineProperty(exports, "CameraAdd", { enumerable: true, get: function () { return CameraAdd_1.CameraAdd; } });
const Calendar_1 = require("./components/Calendar");
Object.defineProperty(exports, "Calendar", { enumerable: true, get: function () { return Calendar_1.Calendar; } });
const CalendarWeekend_1 = require("./components/CalendarWeekend");
Object.defineProperty(exports, "CalendarWeekend", { enumerable: true, get: function () { return CalendarWeekend_1.CalendarWeekend; } });
const CalendarWeek_1 = require("./components/CalendarWeek");
Object.defineProperty(exports, "CalendarWeek", { enumerable: true, get: function () { return CalendarWeek_1.CalendarWeek; } });
const CalendarWeekBegin_1 = require("./components/CalendarWeekBegin");
Object.defineProperty(exports, "CalendarWeekBegin", { enumerable: true, get: function () { return CalendarWeekBegin_1.CalendarWeekBegin; } });
const CalendarTomorrow_1 = require("./components/CalendarTomorrow");
Object.defineProperty(exports, "CalendarTomorrow", { enumerable: true, get: function () { return CalendarTomorrow_1.CalendarTomorrow; } });
const CalendarToday_1 = require("./components/CalendarToday");
Object.defineProperty(exports, "CalendarToday", { enumerable: true, get: function () { return CalendarToday_1.CalendarToday; } });
const CalendarText_1 = require("./components/CalendarText");
Object.defineProperty(exports, "CalendarText", { enumerable: true, get: function () { return CalendarText_1.CalendarText; } });
const CalendarSortDescending_1 = require("./components/CalendarSortDescending");
Object.defineProperty(exports, "CalendarSortDescending", { enumerable: true, get: function () { return CalendarSortDescending_1.CalendarSortDescending; } });
const CalendarSortAscending_1 = require("./components/CalendarSortAscending");
Object.defineProperty(exports, "CalendarSortAscending", { enumerable: true, get: function () { return CalendarSortAscending_1.CalendarSortAscending; } });
const CalendarSearch_1 = require("./components/CalendarSearch");
Object.defineProperty(exports, "CalendarSearch", { enumerable: true, get: function () { return CalendarSearch_1.CalendarSearch; } });
const CalendarRemove_1 = require("./components/CalendarRemove");
Object.defineProperty(exports, "CalendarRemove", { enumerable: true, get: function () { return CalendarRemove_1.CalendarRemove; } });
const CalendarRange_1 = require("./components/CalendarRange");
Object.defineProperty(exports, "CalendarRange", { enumerable: true, get: function () { return CalendarRange_1.CalendarRange; } });
const CalendarPlus_1 = require("./components/CalendarPlus");
Object.defineProperty(exports, "CalendarPlus", { enumerable: true, get: function () { return CalendarPlus_1.CalendarPlus; } });
const CalendarMultiple_1 = require("./components/CalendarMultiple");
Object.defineProperty(exports, "CalendarMultiple", { enumerable: true, get: function () { return CalendarMultiple_1.CalendarMultiple; } });
const CalendarMultipleCheck_1 = require("./components/CalendarMultipleCheck");
Object.defineProperty(exports, "CalendarMultipleCheck", { enumerable: true, get: function () { return CalendarMultipleCheck_1.CalendarMultipleCheck; } });
const CalendarMonth_1 = require("./components/CalendarMonth");
Object.defineProperty(exports, "CalendarMonth", { enumerable: true, get: function () { return CalendarMonth_1.CalendarMonth; } });
const CalendarMinus_1 = require("./components/CalendarMinus");
Object.defineProperty(exports, "CalendarMinus", { enumerable: true, get: function () { return CalendarMinus_1.CalendarMinus; } });
const CalendarImport_1 = require("./components/CalendarImport");
Object.defineProperty(exports, "CalendarImport", { enumerable: true, get: function () { return CalendarImport_1.CalendarImport; } });
const CalendarGrid_1 = require("./components/CalendarGrid");
Object.defineProperty(exports, "CalendarGrid", { enumerable: true, get: function () { return CalendarGrid_1.CalendarGrid; } });
const CalendarExport_1 = require("./components/CalendarExport");
Object.defineProperty(exports, "CalendarExport", { enumerable: true, get: function () { return CalendarExport_1.CalendarExport; } });
const CalendarCheck_1 = require("./components/CalendarCheck");
Object.defineProperty(exports, "CalendarCheck", { enumerable: true, get: function () { return CalendarCheck_1.CalendarCheck; } });
const CalendarArrowRight_1 = require("./components/CalendarArrowRight");
Object.defineProperty(exports, "CalendarArrowRight", { enumerable: true, get: function () { return CalendarArrowRight_1.CalendarArrowRight; } });
const CalendarArrowLeft_1 = require("./components/CalendarArrowLeft");
Object.defineProperty(exports, "CalendarArrowLeft", { enumerable: true, get: function () { return CalendarArrowLeft_1.CalendarArrowLeft; } });
const CalendarAlert_1 = require("./components/CalendarAlert");
Object.defineProperty(exports, "CalendarAlert", { enumerable: true, get: function () { return CalendarAlert_1.CalendarAlert; } });
const Calculator_1 = require("./components/Calculator");
Object.defineProperty(exports, "Calculator", { enumerable: true, get: function () { return Calculator_1.Calculator; } });
const Cake_1 = require("./components/Cake");
Object.defineProperty(exports, "Cake", { enumerable: true, get: function () { return Cake_1.Cake; } });
const Bus_1 = require("./components/Bus");
Object.defineProperty(exports, "Bus", { enumerable: true, get: function () { return Bus_1.Bus; } });
const Bullseye_1 = require("./components/Bullseye");
Object.defineProperty(exports, "Bullseye", { enumerable: true, get: function () { return Bullseye_1.Bullseye; } });
const BullseyeArrow_1 = require("./components/BullseyeArrow");
Object.defineProperty(exports, "BullseyeArrow", { enumerable: true, get: function () { return BullseyeArrow_1.BullseyeArrow; } });
const Bulletlist_1 = require("./components/Bulletlist");
Object.defineProperty(exports, "Bulletlist", { enumerable: true, get: function () { return Bulletlist_1.Bulletlist; } });
const Buildings_1 = require("./components/Buildings");
Object.defineProperty(exports, "Buildings", { enumerable: true, get: function () { return Buildings_1.Buildings; } });
const Building_1 = require("./components/Building");
Object.defineProperty(exports, "Building", { enumerable: true, get: function () { return Building_1.Building; } });
const BuildingSkyscraper_1 = require("./components/BuildingSkyscraper");
Object.defineProperty(exports, "BuildingSkyscraper", { enumerable: true, get: function () { return BuildingSkyscraper_1.BuildingSkyscraper; } });
const BuildingCommunity_1 = require("./components/BuildingCommunity");
Object.defineProperty(exports, "BuildingCommunity", { enumerable: true, get: function () { return BuildingCommunity_1.BuildingCommunity; } });
const Bug_1 = require("./components/Bug");
Object.defineProperty(exports, "Bug", { enumerable: true, get: function () { return Bug_1.Bug; } });
const Briefcase_1 = require("./components/Briefcase");
Object.defineProperty(exports, "Briefcase", { enumerable: true, get: function () { return Briefcase_1.Briefcase; } });
const BriefcaseUpload_1 = require("./components/BriefcaseUpload");
Object.defineProperty(exports, "BriefcaseUpload", { enumerable: true, get: function () { return BriefcaseUpload_1.BriefcaseUpload; } });
const BriefcaseSearch_1 = require("./components/BriefcaseSearch");
Object.defineProperty(exports, "BriefcaseSearch", { enumerable: true, get: function () { return BriefcaseSearch_1.BriefcaseSearch; } });
const BriefcaseSearch1_1 = require("./components/BriefcaseSearch1");
Object.defineProperty(exports, "BriefcaseSearch1", { enumerable: true, get: function () { return BriefcaseSearch1_1.BriefcaseSearch1; } });
const BriefcasePlus_1 = require("./components/BriefcasePlus");
Object.defineProperty(exports, "BriefcasePlus", { enumerable: true, get: function () { return BriefcasePlus_1.BriefcasePlus; } });
const BriefcaseMinus_1 = require("./components/BriefcaseMinus");
Object.defineProperty(exports, "BriefcaseMinus", { enumerable: true, get: function () { return BriefcaseMinus_1.BriefcaseMinus; } });
const BriefcaseDownload_1 = require("./components/BriefcaseDownload");
Object.defineProperty(exports, "BriefcaseDownload", { enumerable: true, get: function () { return BriefcaseDownload_1.BriefcaseDownload; } });
const BriefcaseDelete_1 = require("./components/BriefcaseDelete");
Object.defineProperty(exports, "BriefcaseDelete", { enumerable: true, get: function () { return BriefcaseDelete_1.BriefcaseDelete; } });
const BriefcaseCheck_1 = require("./components/BriefcaseCheck");
Object.defineProperty(exports, "BriefcaseCheck", { enumerable: true, get: function () { return BriefcaseCheck_1.BriefcaseCheck; } });
const BriefcaseAccount_1 = require("./components/BriefcaseAccount");
Object.defineProperty(exports, "BriefcaseAccount", { enumerable: true, get: function () { return BriefcaseAccount_1.BriefcaseAccount; } });
const Bookmarks_1 = require("./components/Bookmarks");
Object.defineProperty(exports, "Bookmarks", { enumerable: true, get: function () { return Bookmarks_1.Bookmarks; } });
const Bookmark_1 = require("./components/Bookmark");
Object.defineProperty(exports, "Bookmark", { enumerable: true, get: function () { return Bookmark_1.Bookmark; } });
const Book_1 = require("./components/Book");
Object.defineProperty(exports, "Book", { enumerable: true, get: function () { return Book_1.Book; } });
const BookOpen_1 = require("./components/BookOpen");
Object.defineProperty(exports, "BookOpen", { enumerable: true, get: function () { return BookOpen_1.BookOpen; } });
const Bluetooth_1 = require("./components/Bluetooth");
Object.defineProperty(exports, "Bluetooth", { enumerable: true, get: function () { return Bluetooth_1.Bluetooth; } });
const Bitcoin_1 = require("./components/Bitcoin");
Object.defineProperty(exports, "Bitcoin", { enumerable: true, get: function () { return Bitcoin_1.Bitcoin; } });
const Bed_1 = require("./components/Bed");
Object.defineProperty(exports, "Bed", { enumerable: true, get: function () { return Bed_1.Bed; } });
const Battery_1 = require("./components/Battery");
Object.defineProperty(exports, "Battery", { enumerable: true, get: function () { return Battery_1.Battery; } });
const BatteryFull_1 = require("./components/BatteryFull");
Object.defineProperty(exports, "BatteryFull", { enumerable: true, get: function () { return BatteryFull_1.BatteryFull; } });
const BatteryCharging_1 = require("./components/BatteryCharging");
Object.defineProperty(exports, "BatteryCharging", { enumerable: true, get: function () { return BatteryCharging_1.BatteryCharging; } });
const Battery2_1 = require("./components/Battery2");
Object.defineProperty(exports, "Battery2", { enumerable: true, get: function () { return Battery2_1.Battery2; } });
const Battery1_1 = require("./components/Battery1");
Object.defineProperty(exports, "Battery1", { enumerable: true, get: function () { return Battery1_1.Battery1; } });
const Backburger_1 = require("./components/Backburger");
Object.defineProperty(exports, "Backburger", { enumerable: true, get: function () { return Backburger_1.Backburger; } });
const Avatar_1 = require("./components/Avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return Avatar_1.Avatar; } });
const AudioDevice_1 = require("./components/AudioDevice");
Object.defineProperty(exports, "AudioDevice", { enumerable: true, get: function () { return AudioDevice_1.AudioDevice; } });
const Attachment_1 = require("./components/Attachment");
Object.defineProperty(exports, "Attachment", { enumerable: true, get: function () { return Attachment_1.Attachment; } });
const At_1 = require("./components/At");
Object.defineProperty(exports, "At", { enumerable: true, get: function () { return At_1.At; } });
const AspectRatio_1 = require("./components/AspectRatio");
Object.defineProperty(exports, "AspectRatio", { enumerable: true, get: function () { return AspectRatio_1.AspectRatio; } });
const Article_1 = require("./components/Article");
Object.defineProperty(exports, "Article", { enumerable: true, get: function () { return Article_1.Article; } });
const ArticleMultiple_1 = require("./components/ArticleMultiple");
Object.defineProperty(exports, "ArticleMultiple", { enumerable: true, get: function () { return ArticleMultiple_1.ArticleMultiple; } });
const ArtText_1 = require("./components/ArtText");
Object.defineProperty(exports, "ArtText", { enumerable: true, get: function () { return ArtText_1.ArtText; } });
const ArrowsVertical_1 = require("./components/ArrowsVertical");
Object.defineProperty(exports, "ArrowsVertical", { enumerable: true, get: function () { return ArrowsVertical_1.ArrowsVertical; } });
const ArrowsHorizontal_1 = require("./components/ArrowsHorizontal");
Object.defineProperty(exports, "ArrowsHorizontal", { enumerable: true, get: function () { return ArrowsHorizontal_1.ArrowsHorizontal; } });
const ArrowUp_1 = require("./components/ArrowUp");
Object.defineProperty(exports, "ArrowUp", { enumerable: true, get: function () { return ArrowUp_1.ArrowUp; } });
const ArrowUpBox_1 = require("./components/ArrowUpBox");
Object.defineProperty(exports, "ArrowUpBox", { enumerable: true, get: function () { return ArrowUpBox_1.ArrowUpBox; } });
const ArrowRight_1 = require("./components/ArrowRight");
Object.defineProperty(exports, "ArrowRight", { enumerable: true, get: function () { return ArrowRight_1.ArrowRight; } });
const ArrowRightBox_1 = require("./components/ArrowRightBox");
Object.defineProperty(exports, "ArrowRightBox", { enumerable: true, get: function () { return ArrowRightBox_1.ArrowRightBox; } });
const ArrowLeft_1 = require("./components/ArrowLeft");
Object.defineProperty(exports, "ArrowLeft", { enumerable: true, get: function () { return ArrowLeft_1.ArrowLeft; } });
const ArrowLeftBox_1 = require("./components/ArrowLeftBox");
Object.defineProperty(exports, "ArrowLeftBox", { enumerable: true, get: function () { return ArrowLeftBox_1.ArrowLeftBox; } });
const ArrowDown_1 = require("./components/ArrowDown");
Object.defineProperty(exports, "ArrowDown", { enumerable: true, get: function () { return ArrowDown_1.ArrowDown; } });
const ArrowDownBox_1 = require("./components/ArrowDownBox");
Object.defineProperty(exports, "ArrowDownBox", { enumerable: true, get: function () { return ArrowDownBox_1.ArrowDownBox; } });
const ArrowBarUp_1 = require("./components/ArrowBarUp");
Object.defineProperty(exports, "ArrowBarUp", { enumerable: true, get: function () { return ArrowBarUp_1.ArrowBarUp; } });
const ArrowBarRight_1 = require("./components/ArrowBarRight");
Object.defineProperty(exports, "ArrowBarRight", { enumerable: true, get: function () { return ArrowBarRight_1.ArrowBarRight; } });
const ArrowBarLeft_1 = require("./components/ArrowBarLeft");
Object.defineProperty(exports, "ArrowBarLeft", { enumerable: true, get: function () { return ArrowBarLeft_1.ArrowBarLeft; } });
const ArrowBarDown_1 = require("./components/ArrowBarDown");
Object.defineProperty(exports, "ArrowBarDown", { enumerable: true, get: function () { return ArrowBarDown_1.ArrowBarDown; } });
const Archive_1 = require("./components/Archive");
Object.defineProperty(exports, "Archive", { enumerable: true, get: function () { return Archive_1.Archive; } });
const Animation_1 = require("./components/Animation");
Object.defineProperty(exports, "Animation", { enumerable: true, get: function () { return Animation_1.Animation; } });
const Android_1 = require("./components/Android");
Object.defineProperty(exports, "Android", { enumerable: true, get: function () { return Android_1.Android; } });
const Anchor_1 = require("./components/Anchor");
Object.defineProperty(exports, "Anchor", { enumerable: true, get: function () { return Anchor_1.Anchor; } });
const Analytics_1 = require("./components/Analytics");
Object.defineProperty(exports, "Analytics", { enumerable: true, get: function () { return Analytics_1.Analytics; } });
const AlignRight_1 = require("./components/AlignRight");
Object.defineProperty(exports, "AlignRight", { enumerable: true, get: function () { return AlignRight_1.AlignRight; } });
const AlignLeft_1 = require("./components/AlignLeft");
Object.defineProperty(exports, "AlignLeft", { enumerable: true, get: function () { return AlignLeft_1.AlignLeft; } });
const AlignJustify_1 = require("./components/AlignJustify");
Object.defineProperty(exports, "AlignJustify", { enumerable: true, get: function () { return AlignJustify_1.AlignJustify; } });
const AlignCenter_1 = require("./components/AlignCenter");
Object.defineProperty(exports, "AlignCenter", { enumerable: true, get: function () { return AlignCenter_1.AlignCenter; } });
const Alert_1 = require("./components/Alert");
Object.defineProperty(exports, "Alert", { enumerable: true, get: function () { return Alert_1.Alert; } });
const AddRow_1 = require("./components/AddRow");
Object.defineProperty(exports, "AddRow", { enumerable: true, get: function () { return AddRow_1.AddRow; } });
const AddGrid_1 = require("./components/AddGrid");
Object.defineProperty(exports, "AddGrid", { enumerable: true, get: function () { return AddGrid_1.AddGrid; } });
const AddCol_1 = require("./components/AddCol");
Object.defineProperty(exports, "AddCol", { enumerable: true, get: function () { return AddCol_1.AddCol; } });
const AddBox_1 = require("./components/AddBox");
Object.defineProperty(exports, "AddBox", { enumerable: true, get: function () { return AddBox_1.AddBox; } });
const AddBoxMultiple_1 = require("./components/AddBoxMultiple");
Object.defineProperty(exports, "AddBoxMultiple", { enumerable: true, get: function () { return AddBoxMultiple_1.AddBoxMultiple; } });
const Ac_1 = require("./components/Ac");
Object.defineProperty(exports, "Ac", { enumerable: true, get: function () { return Ac_1.Ac; } });
const AbTesting_1 = require("./components/AbTesting");
Object.defineProperty(exports, "AbTesting", { enumerable: true, get: function () { return AbTesting_1.AbTesting; } });
const Icon5g_1 = require("./components/Icon5g");
Object.defineProperty(exports, "Icon5g", { enumerable: true, get: function () { return Icon5g_1.Icon5g; } });
const Icon4k_1 = require("./components/Icon4k");
Object.defineProperty(exports, "Icon4k", { enumerable: true, get: function () { return Icon4k_1.Icon4k; } });
const Icon4kBox_1 = require("./components/Icon4kBox");
Object.defineProperty(exports, "Icon4kBox", { enumerable: true, get: function () { return Icon4kBox_1.Icon4kBox; } });
const Icon4g_1 = require("./components/Icon4g");
Object.defineProperty(exports, "Icon4g", { enumerable: true, get: function () { return Icon4g_1.Icon4g; } });
// Map of all icons by name
exports.IconMap = {
    ZoomOut: ZoomOut_1.ZoomOut,
    ZoomIn: ZoomIn_1.ZoomIn,
    Zap: Zap_1.Zap,
    Wind: Wind_1.Wind,
    WarningBox: WarningBox_1.WarningBox,
    Wallet: Wallet_1.Wallet,
    Volume: Volume_1.Volume,
    VolumeX: VolumeX_1.VolumeX,
    VolumeVibrate: VolumeVibrate_1.VolumeVibrate,
    VolumePlus: VolumePlus_1.VolumePlus,
    VolumeMinus: VolumeMinus_1.VolumeMinus,
    Volume3: Volume3_1.Volume3,
    Volume2: Volume2_1.Volume2,
    Volume1: Volume1_1.Volume1,
    Visible: Visible_1.Visible,
    ViewportWide: ViewportWide_1.ViewportWide,
    ViewportNarrow: ViewportNarrow_1.ViewportNarrow,
    ViewList: ViewList_1.ViewList,
    ViewCol: ViewCol_1.ViewCol,
    Video: Video_1.Video,
    VideoOff: VideoOff_1.VideoOff,
    Users: Users_1.Users,
    User: User_1.User,
    UserX: UserX_1.UserX,
    UserPlus: UserPlus_1.UserPlus,
    UserMinus: UserMinus_1.UserMinus,
    Upload: Upload_1.Upload,
    Unlink: Unlink_1.Unlink,
    Ungroup: Ungroup_1.Ungroup,
    Undo: Undo_1.Undo,
    Truck: Truck_1.Truck,
    Trophy: Trophy_1.Trophy,
    Trending: Trending_1.Trending,
    TrendingUp: TrendingUp_1.TrendingUp,
    TrendingDown: TrendingDown_1.TrendingDown,
    Trash: Trash_1.Trash,
    TrashAlt: TrashAlt_1.TrashAlt,
    TrackChanges: TrackChanges_1.TrackChanges,
    Tournament: Tournament_1.Tournament,
    ToggleRight: ToggleRight_1.ToggleRight,
    ToggleLeft: ToggleLeft_1.ToggleLeft,
    Timeline: Timeline_1.Timeline,
    TextWrap: TextWrap_1.TextWrap,
    TextSearch: TextSearch_1.TextSearch,
    TextColums: TextColums_1.TextColums,
    TextAdd: TextAdd_1.TextAdd,
    Teach: Teach_1.Teach,
    Tea: Tea_1.Tea,
    Table: Table_1.Table,
    Tab: Tab_1.Tab,
    Sync: Sync_1.Sync,
    Switch: Switch_1.Switch,
    Sun: Sun_1.Sun,
    SunAlt: SunAlt_1.SunAlt,
    Suitcase: Suitcase_1.Suitcase,
    Subtitles: Subtitles_1.Subtitles,
    Subscriptions: Subscriptions_1.Subscriptions,
    Store: Store_1.Store,
    Spotlight: Spotlight_1.Spotlight,
    SpeedSlow: SpeedSlow_1.SpeedSlow,
    SpeedMedium: SpeedMedium_1.SpeedMedium,
    SpeedFast: SpeedFast_1.SpeedFast,
    Speaker: Speaker_1.Speaker,
    Sort: Sort_1.Sort,
    SortNumeric: SortNumeric_1.SortNumeric,
    SortAlphabetic: SortAlphabetic_1.SortAlphabetic,
    Sliders: Sliders_1.Sliders,
    Sliders2: Sliders2_1.Sliders2,
    Shuffle: Shuffle_1.Shuffle,
    ShoppingBag: ShoppingBag_1.ShoppingBag,
    Ship: Ship_1.Ship,
    Shield: Shield_1.Shield,
    ShieldOff: ShieldOff_1.ShieldOff,
    SharpCorner: SharpCorner_1.SharpCorner,
    Server: Server_1.Server,
    Section: Section_1.Section,
    SectionX: SectionX_1.SectionX,
    SectionPlus: SectionPlus_1.SectionPlus,
    SectionMinus: SectionMinus_1.SectionMinus,
    SectionCopy: SectionCopy_1.SectionCopy,
    Search: Search_1.Search,
    Sd: Sd_1.Sd,
    ScrollVertical: ScrollVertical_1.ScrollVertical,
    ScrollHorizontal: ScrollHorizontal_1.ScrollHorizontal,
    Script: Script_1.Script,
    ScriptText: ScriptText_1.ScriptText,
    Scale: Scale_1.Scale,
    Save: Save_1.Save,
    RoundedCorner: RoundedCorner_1.RoundedCorner,
    Reply: Reply_1.Reply,
    ReplyAll: ReplyAll_1.ReplyAll,
    Repeat: Repeat_1.Repeat,
    RemoveBox: RemoveBox_1.RemoveBox,
    RemoveBoxMultiple: RemoveBoxMultiple_1.RemoveBoxMultiple,
    Reload: Reload_1.Reload,
    Redo: Redo_1.Redo,
    Reciept: Reciept_1.Reciept,
    RecieptAlt: RecieptAlt_1.RecieptAlt,
    RadioTower: RadioTower_1.RadioTower,
    RadioSignal: RadioSignal_1.RadioSignal,
    RadioOn: RadioOn_1.RadioOn,
    RadioHandheld: RadioHandheld_1.RadioHandheld,
    Print: Print_1.Print,
    Prev: Prev_1.Prev,
    Power: Power_1.Power,
    Plus: Plus_1.Plus,
    Playlist: Playlist_1.Playlist,
    Play: Play_1.Play,
    Pixelarticons: Pixelarticons_1.Pixelarticons,
    Pin: Pin_1.Pin,
    PictureInPicture: PictureInPicture_1.PictureInPicture,
    PictureInPictureAlt: PictureInPictureAlt_1.PictureInPictureAlt,
    Percent: Percent_1.Percent,
    Pause: Pause_1.Pause,
    Paperclip: Paperclip_1.Paperclip,
    PaintBucket: PaintBucket_1.PaintBucket,
    Open: Open_1.Open,
    Notification: Notification_1.Notification,
    NotificationOff: NotificationOff_1.NotificationOff,
    Notes: Notes_1.Notes,
    NotesPlus: NotesPlus_1.NotesPlus,
    NotesMultiple: NotesMultiple_1.NotesMultiple,
    NotesDelete: NotesDelete_1.NotesDelete,
    Note: Note_1.Note,
    NotePlus: NotePlus_1.NotePlus,
    NoteMultiple: NoteMultiple_1.NoteMultiple,
    NoteDelete: NoteDelete_1.NoteDelete,
    Next: Next_1.Next,
    Music: Music_1.Music,
    Movie: Movie_1.Movie,
    Move: Move_1.Move,
    Mouse: Mouse_1.Mouse,
    MoreVertical: MoreVertical_1.MoreVertical,
    MoreHorizontal: MoreHorizontal_1.MoreHorizontal,
    Moon: Moon_1.Moon,
    MoonStars: MoonStars_1.MoonStars,
    MoonStar: MoonStar_1.MoonStar,
    MoodSad: MoodSad_1.MoodSad,
    MoodNeutral: MoodNeutral_1.MoodNeutral,
    MoodHappy: MoodHappy_1.MoodHappy,
    Monitor: Monitor_1.Monitor,
    Money: Money_1.Money,
    Modem: Modem_1.Modem,
    MissedCall: MissedCall_1.MissedCall,
    Minus: Minus_1.Minus,
    Message: Message_1.Message,
    MessageText: MessageText_1.MessageText,
    MessageReply: MessageReply_1.MessageReply,
    MessageProcessing: MessageProcessing_1.MessageProcessing,
    MessagePlus: MessagePlus_1.MessagePlus,
    MessageMinus: MessageMinus_1.MessageMinus,
    MessageImage: MessageImage_1.MessageImage,
    MessageFlash: MessageFlash_1.MessageFlash,
    MessageDelete: MessageDelete_1.MessageDelete,
    MessageClock: MessageClock_1.MessageClock,
    MessageBookmark: MessageBookmark_1.MessageBookmark,
    MessageArrowRight: MessageArrowRight_1.MessageArrowRight,
    MessageArrowLeft: MessageArrowLeft_1.MessageArrowLeft,
    Menu: Menu_1.Menu,
    Membercard: Membercard_1.Membercard,
    Mastodon: Mastodon_1.Mastodon,
    Map: Map_1.Map,
    Mail: Mail_1.Mail,
    MailUnread: MailUnread_1.MailUnread,
    MailOff: MailOff_1.MailOff,
    MailMultiple: MailMultiple_1.MailMultiple,
    MailFlash: MailFlash_1.MailFlash,
    MailDelete: MailDelete_1.MailDelete,
    MailCheck: MailCheck_1.MailCheck,
    MailArrowRight: MailArrowRight_1.MailArrowRight,
    Luggage: Luggage_1.Luggage,
    Logout: Logout_1.Logout,
    Login: Login_1.Login,
    Lock: Lock_1.Lock,
    LockOpen: LockOpen_1.LockOpen,
    Loader: Loader_1.Loader,
    List: List_1.List,
    ListBox: ListBox_1.ListBox,
    Link: Link_1.Link,
    Lightbulb: Lightbulb_1.Lightbulb,
    LightbulbOn: LightbulbOn_1.LightbulbOn,
    Lightbulb2: Lightbulb2_1.Lightbulb2,
    Layout: Layout_1.Layout,
    LayoutSidebarRight: LayoutSidebarRight_1.LayoutSidebarRight,
    LayoutSidebarLeft: LayoutSidebarLeft_1.LayoutSidebarLeft,
    LayoutRows: LayoutRows_1.LayoutRows,
    LayoutHeader: LayoutHeader_1.LayoutHeader,
    LayoutFooter: LayoutFooter_1.LayoutFooter,
    LayoutDistributeVertical: LayoutDistributeVertical_1.LayoutDistributeVertical,
    LayoutDistributeHorizontal: LayoutDistributeHorizontal_1.LayoutDistributeHorizontal,
    LayoutColumns: LayoutColumns_1.LayoutColumns,
    LayoutAlignTop: LayoutAlignTop_1.LayoutAlignTop,
    LayoutAlignRight: LayoutAlignRight_1.LayoutAlignRight,
    LayoutAlignLeft: LayoutAlignLeft_1.LayoutAlignLeft,
    LayoutAlignBottom: LayoutAlignBottom_1.LayoutAlignBottom,
    Label: Label_1.Label,
    LabelSharp: LabelSharp_1.LabelSharp,
    LabelAlt: LabelAlt_1.LabelAlt,
    LabelAltMultiple: LabelAltMultiple_1.LabelAltMultiple,
    Keyboard: Keyboard_1.Keyboard,
    Kanban: Kanban_1.Kanban,
    Iso: Iso_1.Iso,
    Invert: Invert_1.Invert,
    InfoBox: InfoBox_1.InfoBox,
    Inbox: Inbox_1.Inbox,
    InboxFull: InboxFull_1.InboxFull,
    InboxAll: InboxAll_1.InboxAll,
    Image: Image_1.Image,
    ImagePlus: ImagePlus_1.ImagePlus,
    ImageNew: ImageNew_1.ImageNew,
    ImageMultiple: ImageMultiple_1.ImageMultiple,
    ImageGallery: ImageGallery_1.ImageGallery,
    ImageFrame: ImageFrame_1.ImageFrame,
    ImageFlash: ImageFlash_1.ImageFlash,
    ImageDelete: ImageDelete_1.ImageDelete,
    ImageBroken: ImageBroken_1.ImageBroken,
    ImageArrowRight: ImageArrowRight_1.ImageArrowRight,
    Human: Human_1.Human,
    HumanRun: HumanRun_1.HumanRun,
    HumanHeight: HumanHeight_1.HumanHeight,
    HumanHeightAlt: HumanHeightAlt_1.HumanHeightAlt,
    HumanHandsup: HumanHandsup_1.HumanHandsup,
    HumanHandsdown: HumanHandsdown_1.HumanHandsdown,
    Hq: Hq_1.Hq,
    Hourglass: Hourglass_1.Hourglass,
    Home: Home_1.Home,
    Hidden: Hidden_1.Hidden,
    Heart: Heart_1.Heart,
    Headset: Headset_1.Headset,
    Headphone: Headphone_1.Headphone,
    Hd: Hd_1.Hd,
    Group: Group_1.Group,
    Grid: Grid_1.Grid,
    Gps: Gps_1.Gps,
    Github: Github_1.Github,
    Github2: Github2_1.Github2,
    GitPullRequest: GitPullRequest_1.GitPullRequest,
    GitMerge: GitMerge_1.GitMerge,
    GitCommit: GitCommit_1.GitCommit,
    GitBranch: GitBranch_1.GitBranch,
    Gift: Gift_1.Gift,
    Gif: Gif_1.Gif,
    Gamepad: Gamepad_1.Gamepad,
    Frame: Frame_1.Frame,
    FrameMinus: FrameMinus_1.FrameMinus,
    FrameDelete: FrameDelete_1.FrameDelete,
    FrameCheck: FrameCheck_1.FrameCheck,
    FrameAdd: FrameAdd_1.FrameAdd,
    Forwardburger: Forwardburger_1.Forwardburger,
    Forward: Forward_1.Forward,
    Folder: Folder_1.Folder,
    FolderX: FolderX_1.FolderX,
    FolderPlus: FolderPlus_1.FolderPlus,
    FolderMinus: FolderMinus_1.FolderMinus,
    FloatRight: FloatRight_1.FloatRight,
    FloatLeft: FloatLeft_1.FloatLeft,
    FloatCenter: FloatCenter_1.FloatCenter,
    FlipToFront: FlipToFront_1.FlipToFront,
    FlipToBack: FlipToBack_1.FlipToBack,
    Flatten: Flatten_1.Flatten,
    Flag: Flag_1.Flag,
    Fill: Fill_1.Fill,
    FillHalf: FillHalf_1.FillHalf,
    File: File_1.File,
    FilePlus: FilePlus_1.FilePlus,
    FileOff: FileOff_1.FileOff,
    FileMultiple: FileMultiple_1.FileMultiple,
    FileMinus: FileMinus_1.FileMinus,
    FileFlash: FileFlash_1.FileFlash,
    FileDelete: FileDelete_1.FileDelete,
    FileAlt: FileAlt_1.FileAlt,
    Eye: Eye_1.Eye,
    EyeClosed: EyeClosed_1.EyeClosed,
    ExternalLink: ExternalLink_1.ExternalLink,
    Expand: Expand_1.Expand,
    Euro: Euro_1.Euro,
    Edit: Edit_1.Edit,
    EditBox: EditBox_1.EditBox,
    Duplicate: Duplicate_1.Duplicate,
    DuplicateAlt: DuplicateAlt_1.DuplicateAlt,
    Drop: Drop_1.Drop,
    DropHalf: DropHalf_1.DropHalf,
    DropFull: DropFull_1.DropFull,
    DropArea: DropArea_1.DropArea,
    DragAndDrop: DragAndDrop_1.DragAndDrop,
    Draft: Draft_1.Draft,
    Download: Download_1.Download,
    Downasaur: Downasaur_1.Downasaur,
    Dollar: Dollar_1.Dollar,
    Dice: Dice_1.Dice,
    Devices: Devices_1.Devices,
    DeviceWatch: DeviceWatch_1.DeviceWatch,
    DeviceVibrate: DeviceVibrate_1.DeviceVibrate,
    DeviceTv: DeviceTv_1.DeviceTv,
    DeviceTvSmart: DeviceTvSmart_1.DeviceTvSmart,
    DeviceTablet: DeviceTablet_1.DeviceTablet,
    DevicePhone: DevicePhone_1.DevicePhone,
    DeviceLaptop: DeviceLaptop_1.DeviceLaptop,
    Deskphone: Deskphone_1.Deskphone,
    Delete: Delete_1.Delete,
    Debug: Debug_1.Debug,
    DebugStop: DebugStop_1.DebugStop,
    DebugPlay: DebugPlay_1.DebugPlay,
    DebugPause: DebugPause_1.DebugPause,
    DebugOff: DebugOff_1.DebugOff,
    DebugCheck: DebugCheck_1.DebugCheck,
    Dashboard: Dashboard_1.Dashboard,
    Cut: Cut_1.Cut,
    Crop: Crop_1.Crop,
    CreditCard: CreditCard_1.CreditCard,
    CreditCardWireless: CreditCardWireless_1.CreditCardWireless,
    CreditCardSettings: CreditCardSettings_1.CreditCardSettings,
    CreditCardPlus: CreditCardPlus_1.CreditCardPlus,
    CreditCardMultiple: CreditCardMultiple_1.CreditCardMultiple,
    CreditCardMinus: CreditCardMinus_1.CreditCardMinus,
    CreditCardDelete: CreditCardDelete_1.CreditCardDelete,
    CornerUpRight: CornerUpRight_1.CornerUpRight,
    CornerUpLeft: CornerUpLeft_1.CornerUpLeft,
    CornerRightUp: CornerRightUp_1.CornerRightUp,
    CornerRightDown: CornerRightDown_1.CornerRightDown,
    CornerLeftUp: CornerLeftUp_1.CornerLeftUp,
    CornerLeftDown: CornerLeftDown_1.CornerLeftDown,
    CornerDownRight: CornerDownRight_1.CornerDownRight,
    CornerDownLeft: CornerDownLeft_1.CornerDownLeft,
    Copy: Copy_1.Copy,
    Contact: Contact_1.Contact,
    ContactPlus: ContactPlus_1.ContactPlus,
    ContactMultiple: ContactMultiple_1.ContactMultiple,
    ContactDelete: ContactDelete_1.ContactDelete,
    Comment: Comment_1.Comment,
    Command: Command_1.Command,
    ColorsSwatch: ColorsSwatch_1.ColorsSwatch,
    Collapse: Collapse_1.Collapse,
    Coin: Coin_1.Coin,
    Coffee: Coffee_1.Coffee,
    CoffeeAlt: CoffeeAlt_1.CoffeeAlt,
    Code: Code_1.Code,
    Cocktail: Cocktail_1.Cocktail,
    Cloud: Cloud_1.Cloud,
    CloudUpload: CloudUpload_1.CloudUpload,
    CloudSun: CloudSun_1.CloudSun,
    CloudMoon: CloudMoon_1.CloudMoon,
    CloudDownload: CloudDownload_1.CloudDownload,
    CloudDone: CloudDone_1.CloudDone,
    Close: Close_1.Close,
    CloseBox: CloseBox_1.CloseBox,
    Clock: Clock_1.Clock,
    Clipboard: Clipboard_1.Clipboard,
    Circle: Circle_1.Circle,
    ChevronsVertical: ChevronsVertical_1.ChevronsVertical,
    ChevronsHorizontal: ChevronsHorizontal_1.ChevronsHorizontal,
    ChevronUp: ChevronUp_1.ChevronUp,
    ChevronRight: ChevronRight_1.ChevronRight,
    ChevronLeft: ChevronLeft_1.ChevronLeft,
    ChevronDown: ChevronDown_1.ChevronDown,
    Chess: Chess_1.Chess,
    Checklist: Checklist_1.Checklist,
    Checkbox: Checkbox_1.Checkbox,
    CheckboxOn: CheckboxOn_1.CheckboxOn,
    Check: Check_1.Check,
    CheckDouble: CheckDouble_1.CheckDouble,
    Chat: Chat_1.Chat,
    Chart: Chart_1.Chart,
    ChartMultiple: ChartMultiple_1.ChartMultiple,
    ChartMinus: ChartMinus_1.ChartMinus,
    ChartDelete: ChartDelete_1.ChartDelete,
    ChartBar: ChartBar_1.ChartBar,
    ChartAdd: ChartAdd_1.ChartAdd,
    CellularSignalOff: CellularSignalOff_1.CellularSignalOff,
    CellularSignal3: CellularSignal3_1.CellularSignal3,
    CellularSignal2: CellularSignal2_1.CellularSignal2,
    CellularSignal1: CellularSignal1_1.CellularSignal1,
    CellularSignal0: CellularSignal0_1.CellularSignal0,
    Cast: Cast_1.Cast,
    Cart: Cart_1.Cart,
    Card: Card_1.Card,
    CardText: CardText_1.CardText,
    CardStack: CardStack_1.CardStack,
    CardPlus: CardPlus_1.CardPlus,
    CardId: CardId_1.CardId,
    Car: Car_1.Car,
    Camera: Camera_1.Camera,
    CameraFace: CameraFace_1.CameraFace,
    CameraAlt: CameraAlt_1.CameraAlt,
    CameraAdd: CameraAdd_1.CameraAdd,
    Calendar: Calendar_1.Calendar,
    CalendarWeekend: CalendarWeekend_1.CalendarWeekend,
    CalendarWeek: CalendarWeek_1.CalendarWeek,
    CalendarWeekBegin: CalendarWeekBegin_1.CalendarWeekBegin,
    CalendarTomorrow: CalendarTomorrow_1.CalendarTomorrow,
    CalendarToday: CalendarToday_1.CalendarToday,
    CalendarText: CalendarText_1.CalendarText,
    CalendarSortDescending: CalendarSortDescending_1.CalendarSortDescending,
    CalendarSortAscending: CalendarSortAscending_1.CalendarSortAscending,
    CalendarSearch: CalendarSearch_1.CalendarSearch,
    CalendarRemove: CalendarRemove_1.CalendarRemove,
    CalendarRange: CalendarRange_1.CalendarRange,
    CalendarPlus: CalendarPlus_1.CalendarPlus,
    CalendarMultiple: CalendarMultiple_1.CalendarMultiple,
    CalendarMultipleCheck: CalendarMultipleCheck_1.CalendarMultipleCheck,
    CalendarMonth: CalendarMonth_1.CalendarMonth,
    CalendarMinus: CalendarMinus_1.CalendarMinus,
    CalendarImport: CalendarImport_1.CalendarImport,
    CalendarGrid: CalendarGrid_1.CalendarGrid,
    CalendarExport: CalendarExport_1.CalendarExport,
    CalendarCheck: CalendarCheck_1.CalendarCheck,
    CalendarArrowRight: CalendarArrowRight_1.CalendarArrowRight,
    CalendarArrowLeft: CalendarArrowLeft_1.CalendarArrowLeft,
    CalendarAlert: CalendarAlert_1.CalendarAlert,
    Calculator: Calculator_1.Calculator,
    Cake: Cake_1.Cake,
    Bus: Bus_1.Bus,
    Bullseye: Bullseye_1.Bullseye,
    BullseyeArrow: BullseyeArrow_1.BullseyeArrow,
    Bulletlist: Bulletlist_1.Bulletlist,
    Buildings: Buildings_1.Buildings,
    Building: Building_1.Building,
    BuildingSkyscraper: BuildingSkyscraper_1.BuildingSkyscraper,
    BuildingCommunity: BuildingCommunity_1.BuildingCommunity,
    Bug: Bug_1.Bug,
    Briefcase: Briefcase_1.Briefcase,
    BriefcaseUpload: BriefcaseUpload_1.BriefcaseUpload,
    BriefcaseSearch: BriefcaseSearch_1.BriefcaseSearch,
    BriefcaseSearch1: BriefcaseSearch1_1.BriefcaseSearch1,
    BriefcasePlus: BriefcasePlus_1.BriefcasePlus,
    BriefcaseMinus: BriefcaseMinus_1.BriefcaseMinus,
    BriefcaseDownload: BriefcaseDownload_1.BriefcaseDownload,
    BriefcaseDelete: BriefcaseDelete_1.BriefcaseDelete,
    BriefcaseCheck: BriefcaseCheck_1.BriefcaseCheck,
    BriefcaseAccount: BriefcaseAccount_1.BriefcaseAccount,
    Bookmarks: Bookmarks_1.Bookmarks,
    Bookmark: Bookmark_1.Bookmark,
    Book: Book_1.Book,
    BookOpen: BookOpen_1.BookOpen,
    Bluetooth: Bluetooth_1.Bluetooth,
    Bitcoin: Bitcoin_1.Bitcoin,
    Bed: Bed_1.Bed,
    Battery: Battery_1.Battery,
    BatteryFull: BatteryFull_1.BatteryFull,
    BatteryCharging: BatteryCharging_1.BatteryCharging,
    Battery2: Battery2_1.Battery2,
    Battery1: Battery1_1.Battery1,
    Backburger: Backburger_1.Backburger,
    Avatar: Avatar_1.Avatar,
    AudioDevice: AudioDevice_1.AudioDevice,
    Attachment: Attachment_1.Attachment,
    At: At_1.At,
    AspectRatio: AspectRatio_1.AspectRatio,
    Article: Article_1.Article,
    ArticleMultiple: ArticleMultiple_1.ArticleMultiple,
    ArtText: ArtText_1.ArtText,
    ArrowsVertical: ArrowsVertical_1.ArrowsVertical,
    ArrowsHorizontal: ArrowsHorizontal_1.ArrowsHorizontal,
    ArrowUp: ArrowUp_1.ArrowUp,
    ArrowUpBox: ArrowUpBox_1.ArrowUpBox,
    ArrowRight: ArrowRight_1.ArrowRight,
    ArrowRightBox: ArrowRightBox_1.ArrowRightBox,
    ArrowLeft: ArrowLeft_1.ArrowLeft,
    ArrowLeftBox: ArrowLeftBox_1.ArrowLeftBox,
    ArrowDown: ArrowDown_1.ArrowDown,
    ArrowDownBox: ArrowDownBox_1.ArrowDownBox,
    ArrowBarUp: ArrowBarUp_1.ArrowBarUp,
    ArrowBarRight: ArrowBarRight_1.ArrowBarRight,
    ArrowBarLeft: ArrowBarLeft_1.ArrowBarLeft,
    ArrowBarDown: ArrowBarDown_1.ArrowBarDown,
    Archive: Archive_1.Archive,
    Animation: Animation_1.Animation,
    Android: Android_1.Android,
    Anchor: Anchor_1.Anchor,
    Analytics: Analytics_1.Analytics,
    AlignRight: AlignRight_1.AlignRight,
    AlignLeft: AlignLeft_1.AlignLeft,
    AlignJustify: AlignJustify_1.AlignJustify,
    AlignCenter: AlignCenter_1.AlignCenter,
    Alert: Alert_1.Alert,
    AddRow: AddRow_1.AddRow,
    AddGrid: AddGrid_1.AddGrid,
    AddCol: AddCol_1.AddCol,
    AddBox: AddBox_1.AddBox,
    AddBoxMultiple: AddBoxMultiple_1.AddBoxMultiple,
    Ac: Ac_1.Ac,
    AbTesting: AbTesting_1.AbTesting,
    Icon5g: Icon5g_1.Icon5g,
    Icon4k: Icon4k_1.Icon4k,
    Icon4kBox: Icon4kBox_1.Icon4kBox,
    Icon4g: Icon4g_1.Icon4g,
};
// Original name to component name mapping
exports.originalToComponent = {
    'zoom-out': 'ZoomOut',
    'zoom-in': 'ZoomIn',
    'zap': 'Zap',
    'wind': 'Wind',
    'warning-box': 'WarningBox',
    'wallet': 'Wallet',
    'volume': 'Volume',
    'volume-x': 'VolumeX',
    'volume-vibrate': 'VolumeVibrate',
    'volume-plus': 'VolumePlus',
    'volume-minus': 'VolumeMinus',
    'volume-3': 'Volume3',
    'volume-2': 'Volume2',
    'volume-1': 'Volume1',
    'visible': 'Visible',
    'viewport-wide': 'ViewportWide',
    'viewport-narrow': 'ViewportNarrow',
    'view-list': 'ViewList',
    'view-col': 'ViewCol',
    'video': 'Video',
    'video-off': 'VideoOff',
    'users': 'Users',
    'user': 'User',
    'user-x': 'UserX',
    'user-plus': 'UserPlus',
    'user-minus': 'UserMinus',
    'upload': 'Upload',
    'unlink': 'Unlink',
    'ungroup': 'Ungroup',
    'undo': 'Undo',
    'truck': 'Truck',
    'trophy': 'Trophy',
    'trending': 'Trending',
    'trending-up': 'TrendingUp',
    'trending-down': 'TrendingDown',
    'trash': 'Trash',
    'trash-alt': 'TrashAlt',
    'track-changes': 'TrackChanges',
    'tournament': 'Tournament',
    'toggle-right': 'ToggleRight',
    'toggle-left': 'ToggleLeft',
    'timeline': 'Timeline',
    'text-wrap': 'TextWrap',
    'text-search': 'TextSearch',
    'text-colums': 'TextColums',
    'text-add': 'TextAdd',
    'teach': 'Teach',
    'tea': 'Tea',
    'table': 'Table',
    'tab': 'Tab',
    'sync': 'Sync',
    'switch': 'Switch',
    'sun': 'Sun',
    'sun-alt': 'SunAlt',
    'suitcase': 'Suitcase',
    'subtitles': 'Subtitles',
    'subscriptions': 'Subscriptions',
    'store': 'Store',
    'spotlight': 'Spotlight',
    'speed-slow': 'SpeedSlow',
    'speed-medium': 'SpeedMedium',
    'speed-fast': 'SpeedFast',
    'speaker': 'Speaker',
    'sort': 'Sort',
    'sort-numeric': 'SortNumeric',
    'sort-alphabetic': 'SortAlphabetic',
    'sliders': 'Sliders',
    'sliders-2': 'Sliders2',
    'shuffle': 'Shuffle',
    'shopping-bag': 'ShoppingBag',
    'ship': 'Ship',
    'shield': 'Shield',
    'shield-off': 'ShieldOff',
    'sharp-corner': 'SharpCorner',
    'server': 'Server',
    'section': 'Section',
    'section-x': 'SectionX',
    'section-plus': 'SectionPlus',
    'section-minus': 'SectionMinus',
    'section-copy': 'SectionCopy',
    'search': 'Search',
    'sd': 'Sd',
    'scroll-vertical': 'ScrollVertical',
    'scroll-horizontal': 'ScrollHorizontal',
    'script': 'Script',
    'script-text': 'ScriptText',
    'scale': 'Scale',
    'save': 'Save',
    'rounded-corner': 'RoundedCorner',
    'reply': 'Reply',
    'reply-all': 'ReplyAll',
    'repeat': 'Repeat',
    'remove-box': 'RemoveBox',
    'remove-box-multiple': 'RemoveBoxMultiple',
    'reload': 'Reload',
    'redo': 'Redo',
    'reciept': 'Reciept',
    'reciept-alt': 'RecieptAlt',
    'radio-tower': 'RadioTower',
    'radio-signal': 'RadioSignal',
    'radio-on': 'RadioOn',
    'radio-handheld': 'RadioHandheld',
    'print': 'Print',
    'prev': 'Prev',
    'power': 'Power',
    'plus': 'Plus',
    'playlist': 'Playlist',
    'play': 'Play',
    'pixelarticons': 'Pixelarticons',
    'pin': 'Pin',
    'picture-in-picture': 'PictureInPicture',
    'picture-in-picture-alt': 'PictureInPictureAlt',
    'percent': 'Percent',
    'pause': 'Pause',
    'paperclip': 'Paperclip',
    'paint-bucket': 'PaintBucket',
    'open': 'Open',
    'notification': 'Notification',
    'notification-off': 'NotificationOff',
    'notes': 'Notes',
    'notes-plus': 'NotesPlus',
    'notes-multiple': 'NotesMultiple',
    'notes-delete': 'NotesDelete',
    'note': 'Note',
    'note-plus': 'NotePlus',
    'note-multiple': 'NoteMultiple',
    'note-delete': 'NoteDelete',
    'next': 'Next',
    'music': 'Music',
    'movie': 'Movie',
    'move': 'Move',
    'mouse': 'Mouse',
    'more-vertical': 'MoreVertical',
    'more-horizontal': 'MoreHorizontal',
    'moon': 'Moon',
    'moon-stars': 'MoonStars',
    'moon-star': 'MoonStar',
    'mood-sad': 'MoodSad',
    'mood-neutral': 'MoodNeutral',
    'mood-happy': 'MoodHappy',
    'monitor': 'Monitor',
    'money': 'Money',
    'modem': 'Modem',
    'missed-call': 'MissedCall',
    'minus': 'Minus',
    'message': 'Message',
    'message-text': 'MessageText',
    'message-reply': 'MessageReply',
    'message-processing': 'MessageProcessing',
    'message-plus': 'MessagePlus',
    'message-minus': 'MessageMinus',
    'message-image': 'MessageImage',
    'message-flash': 'MessageFlash',
    'message-delete': 'MessageDelete',
    'message-clock': 'MessageClock',
    'message-bookmark': 'MessageBookmark',
    'message-arrow-right': 'MessageArrowRight',
    'message-arrow-left': 'MessageArrowLeft',
    'menu': 'Menu',
    'membercard': 'Membercard',
    'mastodon': 'Mastodon',
    'map': 'Map',
    'mail': 'Mail',
    'mail-unread': 'MailUnread',
    'mail-off': 'MailOff',
    'mail-multiple': 'MailMultiple',
    'mail-flash': 'MailFlash',
    'mail-delete': 'MailDelete',
    'mail-check': 'MailCheck',
    'mail-arrow-right': 'MailArrowRight',
    'luggage': 'Luggage',
    'logout': 'Logout',
    'login': 'Login',
    'lock': 'Lock',
    'lock-open': 'LockOpen',
    'loader': 'Loader',
    'list': 'List',
    'list-box': 'ListBox',
    'link': 'Link',
    'lightbulb': 'Lightbulb',
    'lightbulb-on': 'LightbulbOn',
    'lightbulb-2': 'Lightbulb2',
    'layout': 'Layout',
    'layout-sidebar-right': 'LayoutSidebarRight',
    'layout-sidebar-left': 'LayoutSidebarLeft',
    'layout-rows': 'LayoutRows',
    'layout-header': 'LayoutHeader',
    'layout-footer': 'LayoutFooter',
    'layout-distribute-vertical': 'LayoutDistributeVertical',
    'layout-distribute-horizontal': 'LayoutDistributeHorizontal',
    'layout-columns': 'LayoutColumns',
    'layout-align-top': 'LayoutAlignTop',
    'layout-align-right': 'LayoutAlignRight',
    'layout-align-left': 'LayoutAlignLeft',
    'layout-align-bottom': 'LayoutAlignBottom',
    'label': 'Label',
    'label-sharp': 'LabelSharp',
    'label-alt': 'LabelAlt',
    'label-alt-multiple': 'LabelAltMultiple',
    'keyboard': 'Keyboard',
    'kanban': 'Kanban',
    'iso': 'Iso',
    'invert': 'Invert',
    'info-box': 'InfoBox',
    'inbox': 'Inbox',
    'inbox-full': 'InboxFull',
    'inbox-all': 'InboxAll',
    'image': 'Image',
    'image-plus': 'ImagePlus',
    'image-new': 'ImageNew',
    'image-multiple': 'ImageMultiple',
    'image-gallery': 'ImageGallery',
    'image-frame': 'ImageFrame',
    'image-flash': 'ImageFlash',
    'image-delete': 'ImageDelete',
    'image-broken': 'ImageBroken',
    'image-arrow-right': 'ImageArrowRight',
    'human': 'Human',
    'human-run': 'HumanRun',
    'human-height': 'HumanHeight',
    'human-height-alt': 'HumanHeightAlt',
    'human-handsup': 'HumanHandsup',
    'human-handsdown': 'HumanHandsdown',
    'hq': 'Hq',
    'hourglass': 'Hourglass',
    'home': 'Home',
    'hidden': 'Hidden',
    'heart': 'Heart',
    'headset': 'Headset',
    'headphone': 'Headphone',
    'hd': 'Hd',
    'group': 'Group',
    'grid': 'Grid',
    'gps': 'Gps',
    'github': 'Github',
    'github-2': 'Github2',
    'git-pull-request': 'GitPullRequest',
    'git-merge': 'GitMerge',
    'git-commit': 'GitCommit',
    'git-branch': 'GitBranch',
    'gift': 'Gift',
    'gif': 'Gif',
    'gamepad': 'Gamepad',
    'frame': 'Frame',
    'frame-minus': 'FrameMinus',
    'frame-delete': 'FrameDelete',
    'frame-check': 'FrameCheck',
    'frame-add': 'FrameAdd',
    'forwardburger': 'Forwardburger',
    'forward': 'Forward',
    'folder': 'Folder',
    'folder-x': 'FolderX',
    'folder-plus': 'FolderPlus',
    'folder-minus': 'FolderMinus',
    'float-right': 'FloatRight',
    'float-left': 'FloatLeft',
    'float-center': 'FloatCenter',
    'flip-to-front': 'FlipToFront',
    'flip-to-back': 'FlipToBack',
    'flatten': 'Flatten',
    'flag': 'Flag',
    'fill': 'Fill',
    'fill-half': 'FillHalf',
    'file': 'File',
    'file-plus': 'FilePlus',
    'file-off': 'FileOff',
    'file-multiple': 'FileMultiple',
    'file-minus': 'FileMinus',
    'file-flash': 'FileFlash',
    'file-delete': 'FileDelete',
    'file-alt': 'FileAlt',
    'eye': 'Eye',
    'eye-closed': 'EyeClosed',
    'external-link': 'ExternalLink',
    'expand': 'Expand',
    'euro': 'Euro',
    'edit': 'Edit',
    'edit-box': 'EditBox',
    'duplicate': 'Duplicate',
    'duplicate-alt': 'DuplicateAlt',
    'drop': 'Drop',
    'drop-half': 'DropHalf',
    'drop-full': 'DropFull',
    'drop-area': 'DropArea',
    'drag-and-drop': 'DragAndDrop',
    'draft': 'Draft',
    'download': 'Download',
    'downasaur': 'Downasaur',
    'dollar': 'Dollar',
    'dice': 'Dice',
    'devices': 'Devices',
    'device-watch': 'DeviceWatch',
    'device-vibrate': 'DeviceVibrate',
    'device-tv': 'DeviceTv',
    'device-tv-smart': 'DeviceTvSmart',
    'device-tablet': 'DeviceTablet',
    'device-phone': 'DevicePhone',
    'device-laptop': 'DeviceLaptop',
    'deskphone': 'Deskphone',
    'delete': 'Delete',
    'debug': 'Debug',
    'debug-stop': 'DebugStop',
    'debug-play': 'DebugPlay',
    'debug-pause': 'DebugPause',
    'debug-off': 'DebugOff',
    'debug-check': 'DebugCheck',
    'dashboard': 'Dashboard',
    'cut': 'Cut',
    'crop': 'Crop',
    'credit-card': 'CreditCard',
    'credit-card-wireless': 'CreditCardWireless',
    'credit-card-settings': 'CreditCardSettings',
    'credit-card-plus': 'CreditCardPlus',
    'credit-card-multiple': 'CreditCardMultiple',
    'credit-card-minus': 'CreditCardMinus',
    'credit-card-delete': 'CreditCardDelete',
    'corner-up-right': 'CornerUpRight',
    'corner-up-left': 'CornerUpLeft',
    'corner-right-up': 'CornerRightUp',
    'corner-right-down': 'CornerRightDown',
    'corner-left-up': 'CornerLeftUp',
    'corner-left-down': 'CornerLeftDown',
    'corner-down-right': 'CornerDownRight',
    'corner-down-left': 'CornerDownLeft',
    'copy': 'Copy',
    'contact': 'Contact',
    'contact-plus': 'ContactPlus',
    'contact-multiple': 'ContactMultiple',
    'contact-delete': 'ContactDelete',
    'comment': 'Comment',
    'command': 'Command',
    'colors-swatch': 'ColorsSwatch',
    'collapse': 'Collapse',
    'coin': 'Coin',
    'coffee': 'Coffee',
    'coffee-alt': 'CoffeeAlt',
    'code': 'Code',
    'cocktail': 'Cocktail',
    'cloud': 'Cloud',
    'cloud-upload': 'CloudUpload',
    'cloud-sun': 'CloudSun',
    'cloud-moon': 'CloudMoon',
    'cloud-download': 'CloudDownload',
    'cloud-done': 'CloudDone',
    'close': 'Close',
    'close-box': 'CloseBox',
    'clock': 'Clock',
    'clipboard': 'Clipboard',
    'circle': 'Circle',
    'chevrons-vertical': 'ChevronsVertical',
    'chevrons-horizontal': 'ChevronsHorizontal',
    'chevron-up': 'ChevronUp',
    'chevron-right': 'ChevronRight',
    'chevron-left': 'ChevronLeft',
    'chevron-down': 'ChevronDown',
    'chess': 'Chess',
    'checklist': 'Checklist',
    'checkbox': 'Checkbox',
    'checkbox-on': 'CheckboxOn',
    'check': 'Check',
    'check-double': 'CheckDouble',
    'chat': 'Chat',
    'chart': 'Chart',
    'chart-multiple': 'ChartMultiple',
    'chart-minus': 'ChartMinus',
    'chart-delete': 'ChartDelete',
    'chart-bar': 'ChartBar',
    'chart-add': 'ChartAdd',
    'cellular-signal-off': 'CellularSignalOff',
    'cellular-signal-3': 'CellularSignal3',
    'cellular-signal-2': 'CellularSignal2',
    'cellular-signal-1': 'CellularSignal1',
    'cellular-signal-0': 'CellularSignal0',
    'cast': 'Cast',
    'cart': 'Cart',
    'card': 'Card',
    'card-text': 'CardText',
    'card-stack': 'CardStack',
    'card-plus': 'CardPlus',
    'card-id': 'CardId',
    'car': 'Car',
    'camera': 'Camera',
    'camera-face': 'CameraFace',
    'camera-alt': 'CameraAlt',
    'camera-add': 'CameraAdd',
    'calendar': 'Calendar',
    'calendar-weekend': 'CalendarWeekend',
    'calendar-week': 'CalendarWeek',
    'calendar-week-begin': 'CalendarWeekBegin',
    'calendar-tomorrow': 'CalendarTomorrow',
    'calendar-today': 'CalendarToday',
    'calendar-text': 'CalendarText',
    'calendar-sort-descending': 'CalendarSortDescending',
    'calendar-sort-ascending': 'CalendarSortAscending',
    'calendar-search': 'CalendarSearch',
    'calendar-remove': 'CalendarRemove',
    'calendar-range': 'CalendarRange',
    'calendar-plus': 'CalendarPlus',
    'calendar-multiple': 'CalendarMultiple',
    'calendar-multiple-check': 'CalendarMultipleCheck',
    'calendar-month': 'CalendarMonth',
    'calendar-minus': 'CalendarMinus',
    'calendar-import': 'CalendarImport',
    'calendar-grid': 'CalendarGrid',
    'calendar-export': 'CalendarExport',
    'calendar-check': 'CalendarCheck',
    'calendar-arrow-right': 'CalendarArrowRight',
    'calendar-arrow-left': 'CalendarArrowLeft',
    'calendar-alert': 'CalendarAlert',
    'calculator': 'Calculator',
    'cake': 'Cake',
    'bus': 'Bus',
    'bullseye': 'Bullseye',
    'bullseye-arrow': 'BullseyeArrow',
    'bulletlist': 'Bulletlist',
    'buildings': 'Buildings',
    'building': 'Building',
    'building-skyscraper': 'BuildingSkyscraper',
    'building-community': 'BuildingCommunity',
    'bug': 'Bug',
    'briefcase': 'Briefcase',
    'briefcase-upload': 'BriefcaseUpload',
    'briefcase-search': 'BriefcaseSearch',
    'briefcase-search-1': 'BriefcaseSearch1',
    'briefcase-plus': 'BriefcasePlus',
    'briefcase-minus': 'BriefcaseMinus',
    'briefcase-download': 'BriefcaseDownload',
    'briefcase-delete': 'BriefcaseDelete',
    'briefcase-check': 'BriefcaseCheck',
    'briefcase-account': 'BriefcaseAccount',
    'bookmarks': 'Bookmarks',
    'bookmark': 'Bookmark',
    'book': 'Book',
    'book-open': 'BookOpen',
    'bluetooth': 'Bluetooth',
    'bitcoin': 'Bitcoin',
    'bed': 'Bed',
    'battery': 'Battery',
    'battery-full': 'BatteryFull',
    'battery-charging': 'BatteryCharging',
    'battery-2': 'Battery2',
    'battery-1': 'Battery1',
    'backburger': 'Backburger',
    'avatar': 'Avatar',
    'audio-device': 'AudioDevice',
    'attachment': 'Attachment',
    'at': 'At',
    'aspect-ratio': 'AspectRatio',
    'article': 'Article',
    'article-multiple': 'ArticleMultiple',
    'art-text': 'ArtText',
    'arrows-vertical': 'ArrowsVertical',
    'arrows-horizontal': 'ArrowsHorizontal',
    'arrow-up': 'ArrowUp',
    'arrow-up-box': 'ArrowUpBox',
    'arrow-right': 'ArrowRight',
    'arrow-right-box': 'ArrowRightBox',
    'arrow-left': 'ArrowLeft',
    'arrow-left-box': 'ArrowLeftBox',
    'arrow-down': 'ArrowDown',
    'arrow-down-box': 'ArrowDownBox',
    'arrow-bar-up': 'ArrowBarUp',
    'arrow-bar-right': 'ArrowBarRight',
    'arrow-bar-left': 'ArrowBarLeft',
    'arrow-bar-down': 'ArrowBarDown',
    'archive': 'Archive',
    'animation': 'Animation',
    'android': 'Android',
    'anchor': 'Anchor',
    'analytics': 'Analytics',
    'align-right': 'AlignRight',
    'align-left': 'AlignLeft',
    'align-justify': 'AlignJustify',
    'align-center': 'AlignCenter',
    'alert': 'Alert',
    'add-row': 'AddRow',
    'add-grid': 'AddGrid',
    'add-col': 'AddCol',
    'add-box': 'AddBox',
    'add-box-multiple': 'AddBoxMultiple',
    'ac': 'Ac',
    'ab-testing': 'AbTesting',
    '5g': 'Icon5g',
    '4k': 'Icon4k',
    '4k-box': 'Icon4kBox',
    '4g': 'Icon4g',
};
// Component name to original name mapping
exports.componentToOriginal = {
    'ZoomOut': 'zoom-out',
    'ZoomIn': 'zoom-in',
    'Zap': 'zap',
    'Wind': 'wind',
    'WarningBox': 'warning-box',
    'Wallet': 'wallet',
    'Volume': 'volume',
    'VolumeX': 'volume-x',
    'VolumeVibrate': 'volume-vibrate',
    'VolumePlus': 'volume-plus',
    'VolumeMinus': 'volume-minus',
    'Volume3': 'volume-3',
    'Volume2': 'volume-2',
    'Volume1': 'volume-1',
    'Visible': 'visible',
    'ViewportWide': 'viewport-wide',
    'ViewportNarrow': 'viewport-narrow',
    'ViewList': 'view-list',
    'ViewCol': 'view-col',
    'Video': 'video',
    'VideoOff': 'video-off',
    'Users': 'users',
    'User': 'user',
    'UserX': 'user-x',
    'UserPlus': 'user-plus',
    'UserMinus': 'user-minus',
    'Upload': 'upload',
    'Unlink': 'unlink',
    'Ungroup': 'ungroup',
    'Undo': 'undo',
    'Truck': 'truck',
    'Trophy': 'trophy',
    'Trending': 'trending',
    'TrendingUp': 'trending-up',
    'TrendingDown': 'trending-down',
    'Trash': 'trash',
    'TrashAlt': 'trash-alt',
    'TrackChanges': 'track-changes',
    'Tournament': 'tournament',
    'ToggleRight': 'toggle-right',
    'ToggleLeft': 'toggle-left',
    'Timeline': 'timeline',
    'TextWrap': 'text-wrap',
    'TextSearch': 'text-search',
    'TextColums': 'text-colums',
    'TextAdd': 'text-add',
    'Teach': 'teach',
    'Tea': 'tea',
    'Table': 'table',
    'Tab': 'tab',
    'Sync': 'sync',
    'Switch': 'switch',
    'Sun': 'sun',
    'SunAlt': 'sun-alt',
    'Suitcase': 'suitcase',
    'Subtitles': 'subtitles',
    'Subscriptions': 'subscriptions',
    'Store': 'store',
    'Spotlight': 'spotlight',
    'SpeedSlow': 'speed-slow',
    'SpeedMedium': 'speed-medium',
    'SpeedFast': 'speed-fast',
    'Speaker': 'speaker',
    'Sort': 'sort',
    'SortNumeric': 'sort-numeric',
    'SortAlphabetic': 'sort-alphabetic',
    'Sliders': 'sliders',
    'Sliders2': 'sliders-2',
    'Shuffle': 'shuffle',
    'ShoppingBag': 'shopping-bag',
    'Ship': 'ship',
    'Shield': 'shield',
    'ShieldOff': 'shield-off',
    'SharpCorner': 'sharp-corner',
    'Server': 'server',
    'Section': 'section',
    'SectionX': 'section-x',
    'SectionPlus': 'section-plus',
    'SectionMinus': 'section-minus',
    'SectionCopy': 'section-copy',
    'Search': 'search',
    'Sd': 'sd',
    'ScrollVertical': 'scroll-vertical',
    'ScrollHorizontal': 'scroll-horizontal',
    'Script': 'script',
    'ScriptText': 'script-text',
    'Scale': 'scale',
    'Save': 'save',
    'RoundedCorner': 'rounded-corner',
    'Reply': 'reply',
    'ReplyAll': 'reply-all',
    'Repeat': 'repeat',
    'RemoveBox': 'remove-box',
    'RemoveBoxMultiple': 'remove-box-multiple',
    'Reload': 'reload',
    'Redo': 'redo',
    'Reciept': 'reciept',
    'RecieptAlt': 'reciept-alt',
    'RadioTower': 'radio-tower',
    'RadioSignal': 'radio-signal',
    'RadioOn': 'radio-on',
    'RadioHandheld': 'radio-handheld',
    'Print': 'print',
    'Prev': 'prev',
    'Power': 'power',
    'Plus': 'plus',
    'Playlist': 'playlist',
    'Play': 'play',
    'Pixelarticons': 'pixelarticons',
    'Pin': 'pin',
    'PictureInPicture': 'picture-in-picture',
    'PictureInPictureAlt': 'picture-in-picture-alt',
    'Percent': 'percent',
    'Pause': 'pause',
    'Paperclip': 'paperclip',
    'PaintBucket': 'paint-bucket',
    'Open': 'open',
    'Notification': 'notification',
    'NotificationOff': 'notification-off',
    'Notes': 'notes',
    'NotesPlus': 'notes-plus',
    'NotesMultiple': 'notes-multiple',
    'NotesDelete': 'notes-delete',
    'Note': 'note',
    'NotePlus': 'note-plus',
    'NoteMultiple': 'note-multiple',
    'NoteDelete': 'note-delete',
    'Next': 'next',
    'Music': 'music',
    'Movie': 'movie',
    'Move': 'move',
    'Mouse': 'mouse',
    'MoreVertical': 'more-vertical',
    'MoreHorizontal': 'more-horizontal',
    'Moon': 'moon',
    'MoonStars': 'moon-stars',
    'MoonStar': 'moon-star',
    'MoodSad': 'mood-sad',
    'MoodNeutral': 'mood-neutral',
    'MoodHappy': 'mood-happy',
    'Monitor': 'monitor',
    'Money': 'money',
    'Modem': 'modem',
    'MissedCall': 'missed-call',
    'Minus': 'minus',
    'Message': 'message',
    'MessageText': 'message-text',
    'MessageReply': 'message-reply',
    'MessageProcessing': 'message-processing',
    'MessagePlus': 'message-plus',
    'MessageMinus': 'message-minus',
    'MessageImage': 'message-image',
    'MessageFlash': 'message-flash',
    'MessageDelete': 'message-delete',
    'MessageClock': 'message-clock',
    'MessageBookmark': 'message-bookmark',
    'MessageArrowRight': 'message-arrow-right',
    'MessageArrowLeft': 'message-arrow-left',
    'Menu': 'menu',
    'Membercard': 'membercard',
    'Mastodon': 'mastodon',
    'Map': 'map',
    'Mail': 'mail',
    'MailUnread': 'mail-unread',
    'MailOff': 'mail-off',
    'MailMultiple': 'mail-multiple',
    'MailFlash': 'mail-flash',
    'MailDelete': 'mail-delete',
    'MailCheck': 'mail-check',
    'MailArrowRight': 'mail-arrow-right',
    'Luggage': 'luggage',
    'Logout': 'logout',
    'Login': 'login',
    'Lock': 'lock',
    'LockOpen': 'lock-open',
    'Loader': 'loader',
    'List': 'list',
    'ListBox': 'list-box',
    'Link': 'link',
    'Lightbulb': 'lightbulb',
    'LightbulbOn': 'lightbulb-on',
    'Lightbulb2': 'lightbulb-2',
    'Layout': 'layout',
    'LayoutSidebarRight': 'layout-sidebar-right',
    'LayoutSidebarLeft': 'layout-sidebar-left',
    'LayoutRows': 'layout-rows',
    'LayoutHeader': 'layout-header',
    'LayoutFooter': 'layout-footer',
    'LayoutDistributeVertical': 'layout-distribute-vertical',
    'LayoutDistributeHorizontal': 'layout-distribute-horizontal',
    'LayoutColumns': 'layout-columns',
    'LayoutAlignTop': 'layout-align-top',
    'LayoutAlignRight': 'layout-align-right',
    'LayoutAlignLeft': 'layout-align-left',
    'LayoutAlignBottom': 'layout-align-bottom',
    'Label': 'label',
    'LabelSharp': 'label-sharp',
    'LabelAlt': 'label-alt',
    'LabelAltMultiple': 'label-alt-multiple',
    'Keyboard': 'keyboard',
    'Kanban': 'kanban',
    'Iso': 'iso',
    'Invert': 'invert',
    'InfoBox': 'info-box',
    'Inbox': 'inbox',
    'InboxFull': 'inbox-full',
    'InboxAll': 'inbox-all',
    'Image': 'image',
    'ImagePlus': 'image-plus',
    'ImageNew': 'image-new',
    'ImageMultiple': 'image-multiple',
    'ImageGallery': 'image-gallery',
    'ImageFrame': 'image-frame',
    'ImageFlash': 'image-flash',
    'ImageDelete': 'image-delete',
    'ImageBroken': 'image-broken',
    'ImageArrowRight': 'image-arrow-right',
    'Human': 'human',
    'HumanRun': 'human-run',
    'HumanHeight': 'human-height',
    'HumanHeightAlt': 'human-height-alt',
    'HumanHandsup': 'human-handsup',
    'HumanHandsdown': 'human-handsdown',
    'Hq': 'hq',
    'Hourglass': 'hourglass',
    'Home': 'home',
    'Hidden': 'hidden',
    'Heart': 'heart',
    'Headset': 'headset',
    'Headphone': 'headphone',
    'Hd': 'hd',
    'Group': 'group',
    'Grid': 'grid',
    'Gps': 'gps',
    'Github': 'github',
    'Github2': 'github-2',
    'GitPullRequest': 'git-pull-request',
    'GitMerge': 'git-merge',
    'GitCommit': 'git-commit',
    'GitBranch': 'git-branch',
    'Gift': 'gift',
    'Gif': 'gif',
    'Gamepad': 'gamepad',
    'Frame': 'frame',
    'FrameMinus': 'frame-minus',
    'FrameDelete': 'frame-delete',
    'FrameCheck': 'frame-check',
    'FrameAdd': 'frame-add',
    'Forwardburger': 'forwardburger',
    'Forward': 'forward',
    'Folder': 'folder',
    'FolderX': 'folder-x',
    'FolderPlus': 'folder-plus',
    'FolderMinus': 'folder-minus',
    'FloatRight': 'float-right',
    'FloatLeft': 'float-left',
    'FloatCenter': 'float-center',
    'FlipToFront': 'flip-to-front',
    'FlipToBack': 'flip-to-back',
    'Flatten': 'flatten',
    'Flag': 'flag',
    'Fill': 'fill',
    'FillHalf': 'fill-half',
    'File': 'file',
    'FilePlus': 'file-plus',
    'FileOff': 'file-off',
    'FileMultiple': 'file-multiple',
    'FileMinus': 'file-minus',
    'FileFlash': 'file-flash',
    'FileDelete': 'file-delete',
    'FileAlt': 'file-alt',
    'Eye': 'eye',
    'EyeClosed': 'eye-closed',
    'ExternalLink': 'external-link',
    'Expand': 'expand',
    'Euro': 'euro',
    'Edit': 'edit',
    'EditBox': 'edit-box',
    'Duplicate': 'duplicate',
    'DuplicateAlt': 'duplicate-alt',
    'Drop': 'drop',
    'DropHalf': 'drop-half',
    'DropFull': 'drop-full',
    'DropArea': 'drop-area',
    'DragAndDrop': 'drag-and-drop',
    'Draft': 'draft',
    'Download': 'download',
    'Downasaur': 'downasaur',
    'Dollar': 'dollar',
    'Dice': 'dice',
    'Devices': 'devices',
    'DeviceWatch': 'device-watch',
    'DeviceVibrate': 'device-vibrate',
    'DeviceTv': 'device-tv',
    'DeviceTvSmart': 'device-tv-smart',
    'DeviceTablet': 'device-tablet',
    'DevicePhone': 'device-phone',
    'DeviceLaptop': 'device-laptop',
    'Deskphone': 'deskphone',
    'Delete': 'delete',
    'Debug': 'debug',
    'DebugStop': 'debug-stop',
    'DebugPlay': 'debug-play',
    'DebugPause': 'debug-pause',
    'DebugOff': 'debug-off',
    'DebugCheck': 'debug-check',
    'Dashboard': 'dashboard',
    'Cut': 'cut',
    'Crop': 'crop',
    'CreditCard': 'credit-card',
    'CreditCardWireless': 'credit-card-wireless',
    'CreditCardSettings': 'credit-card-settings',
    'CreditCardPlus': 'credit-card-plus',
    'CreditCardMultiple': 'credit-card-multiple',
    'CreditCardMinus': 'credit-card-minus',
    'CreditCardDelete': 'credit-card-delete',
    'CornerUpRight': 'corner-up-right',
    'CornerUpLeft': 'corner-up-left',
    'CornerRightUp': 'corner-right-up',
    'CornerRightDown': 'corner-right-down',
    'CornerLeftUp': 'corner-left-up',
    'CornerLeftDown': 'corner-left-down',
    'CornerDownRight': 'corner-down-right',
    'CornerDownLeft': 'corner-down-left',
    'Copy': 'copy',
    'Contact': 'contact',
    'ContactPlus': 'contact-plus',
    'ContactMultiple': 'contact-multiple',
    'ContactDelete': 'contact-delete',
    'Comment': 'comment',
    'Command': 'command',
    'ColorsSwatch': 'colors-swatch',
    'Collapse': 'collapse',
    'Coin': 'coin',
    'Coffee': 'coffee',
    'CoffeeAlt': 'coffee-alt',
    'Code': 'code',
    'Cocktail': 'cocktail',
    'Cloud': 'cloud',
    'CloudUpload': 'cloud-upload',
    'CloudSun': 'cloud-sun',
    'CloudMoon': 'cloud-moon',
    'CloudDownload': 'cloud-download',
    'CloudDone': 'cloud-done',
    'Close': 'close',
    'CloseBox': 'close-box',
    'Clock': 'clock',
    'Clipboard': 'clipboard',
    'Circle': 'circle',
    'ChevronsVertical': 'chevrons-vertical',
    'ChevronsHorizontal': 'chevrons-horizontal',
    'ChevronUp': 'chevron-up',
    'ChevronRight': 'chevron-right',
    'ChevronLeft': 'chevron-left',
    'ChevronDown': 'chevron-down',
    'Chess': 'chess',
    'Checklist': 'checklist',
    'Checkbox': 'checkbox',
    'CheckboxOn': 'checkbox-on',
    'Check': 'check',
    'CheckDouble': 'check-double',
    'Chat': 'chat',
    'Chart': 'chart',
    'ChartMultiple': 'chart-multiple',
    'ChartMinus': 'chart-minus',
    'ChartDelete': 'chart-delete',
    'ChartBar': 'chart-bar',
    'ChartAdd': 'chart-add',
    'CellularSignalOff': 'cellular-signal-off',
    'CellularSignal3': 'cellular-signal-3',
    'CellularSignal2': 'cellular-signal-2',
    'CellularSignal1': 'cellular-signal-1',
    'CellularSignal0': 'cellular-signal-0',
    'Cast': 'cast',
    'Cart': 'cart',
    'Card': 'card',
    'CardText': 'card-text',
    'CardStack': 'card-stack',
    'CardPlus': 'card-plus',
    'CardId': 'card-id',
    'Car': 'car',
    'Camera': 'camera',
    'CameraFace': 'camera-face',
    'CameraAlt': 'camera-alt',
    'CameraAdd': 'camera-add',
    'Calendar': 'calendar',
    'CalendarWeekend': 'calendar-weekend',
    'CalendarWeek': 'calendar-week',
    'CalendarWeekBegin': 'calendar-week-begin',
    'CalendarTomorrow': 'calendar-tomorrow',
    'CalendarToday': 'calendar-today',
    'CalendarText': 'calendar-text',
    'CalendarSortDescending': 'calendar-sort-descending',
    'CalendarSortAscending': 'calendar-sort-ascending',
    'CalendarSearch': 'calendar-search',
    'CalendarRemove': 'calendar-remove',
    'CalendarRange': 'calendar-range',
    'CalendarPlus': 'calendar-plus',
    'CalendarMultiple': 'calendar-multiple',
    'CalendarMultipleCheck': 'calendar-multiple-check',
    'CalendarMonth': 'calendar-month',
    'CalendarMinus': 'calendar-minus',
    'CalendarImport': 'calendar-import',
    'CalendarGrid': 'calendar-grid',
    'CalendarExport': 'calendar-export',
    'CalendarCheck': 'calendar-check',
    'CalendarArrowRight': 'calendar-arrow-right',
    'CalendarArrowLeft': 'calendar-arrow-left',
    'CalendarAlert': 'calendar-alert',
    'Calculator': 'calculator',
    'Cake': 'cake',
    'Bus': 'bus',
    'Bullseye': 'bullseye',
    'BullseyeArrow': 'bullseye-arrow',
    'Bulletlist': 'bulletlist',
    'Buildings': 'buildings',
    'Building': 'building',
    'BuildingSkyscraper': 'building-skyscraper',
    'BuildingCommunity': 'building-community',
    'Bug': 'bug',
    'Briefcase': 'briefcase',
    'BriefcaseUpload': 'briefcase-upload',
    'BriefcaseSearch': 'briefcase-search',
    'BriefcaseSearch1': 'briefcase-search-1',
    'BriefcasePlus': 'briefcase-plus',
    'BriefcaseMinus': 'briefcase-minus',
    'BriefcaseDownload': 'briefcase-download',
    'BriefcaseDelete': 'briefcase-delete',
    'BriefcaseCheck': 'briefcase-check',
    'BriefcaseAccount': 'briefcase-account',
    'Bookmarks': 'bookmarks',
    'Bookmark': 'bookmark',
    'Book': 'book',
    'BookOpen': 'book-open',
    'Bluetooth': 'bluetooth',
    'Bitcoin': 'bitcoin',
    'Bed': 'bed',
    'Battery': 'battery',
    'BatteryFull': 'battery-full',
    'BatteryCharging': 'battery-charging',
    'Battery2': 'battery-2',
    'Battery1': 'battery-1',
    'Backburger': 'backburger',
    'Avatar': 'avatar',
    'AudioDevice': 'audio-device',
    'Attachment': 'attachment',
    'At': 'at',
    'AspectRatio': 'aspect-ratio',
    'Article': 'article',
    'ArticleMultiple': 'article-multiple',
    'ArtText': 'art-text',
    'ArrowsVertical': 'arrows-vertical',
    'ArrowsHorizontal': 'arrows-horizontal',
    'ArrowUp': 'arrow-up',
    'ArrowUpBox': 'arrow-up-box',
    'ArrowRight': 'arrow-right',
    'ArrowRightBox': 'arrow-right-box',
    'ArrowLeft': 'arrow-left',
    'ArrowLeftBox': 'arrow-left-box',
    'ArrowDown': 'arrow-down',
    'ArrowDownBox': 'arrow-down-box',
    'ArrowBarUp': 'arrow-bar-up',
    'ArrowBarRight': 'arrow-bar-right',
    'ArrowBarLeft': 'arrow-bar-left',
    'ArrowBarDown': 'arrow-bar-down',
    'Archive': 'archive',
    'Animation': 'animation',
    'Android': 'android',
    'Anchor': 'anchor',
    'Analytics': 'analytics',
    'AlignRight': 'align-right',
    'AlignLeft': 'align-left',
    'AlignJustify': 'align-justify',
    'AlignCenter': 'align-center',
    'Alert': 'alert',
    'AddRow': 'add-row',
    'AddGrid': 'add-grid',
    'AddCol': 'add-col',
    'AddBox': 'add-box',
    'AddBoxMultiple': 'add-box-multiple',
    'Ac': 'ac',
    'AbTesting': 'ab-testing',
    'Icon5g': '5g',
    'Icon4k': '4k',
    'Icon4kBox': '4k-box',
    'Icon4g': '4g',
};
